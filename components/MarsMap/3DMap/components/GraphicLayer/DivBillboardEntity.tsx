import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, ImageProps, handleImage, handleOffset, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';
import { renderToString } from 'react-dom/server'

export interface DivBillboardProps extends Omit<sxii.graphic.DivBillboardEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    children?: React.ReactNode
    className?: string
    /** 需在点标记中显示的图标。可以是一个本地图标地址 */
    image?: ImageProps | string
    /** 点标记显示位置偏移量 */
    offset?: Array<number>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.DivBillboardEntity) => void
    onUnmount?: (entity: sxii.graphic.DivBillboardEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.DivBillboardEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.DivBillboardEntity, style: sxii.graphic.DivBillboardEntityOptions) {
        instance.style = style
    },
    image(instance: sxii.graphic.DivBillboardEntity, image: ImageProps | string) {
        instance.style = {
            ...instance.style,
            ...handleImage(image)
        }
    },
    offset(instance: sxii.graphic.DivBillboardEntity, offset: Array<number>) {
        instance.style = {
            ...instance.style,
            ...handleOffset(offset)
        }
    },
    label(instance: sxii.graphic.DivBillboardEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.DivBillboardEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class DivBillboardEntity extends PureComponent<DivBillboardProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.DivBillboardEntity | undefined
    containerElement: HTMLDivElement | null = null

    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: DivBillboardProps) {
        if (this.entity) {

            this.updateContent()
            UnRegisterEvents(this.props, this.entity, EventEntityMap)

            UpdatePropsAndRegisterEvents({
                updateMap,
                prevProps,
                eventMap: EventEntityMap,
                nextProps: this.props,
                instance: this.entity
            })

        }
    }

    componentWillUnmount() {
        if (this.entity) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.entity)
            }
            UnRegisterEvents(this.props, this.entity, EventEntityMap)

            this.entity.destroy(!!this.props.isDeleteAttr)
        }
    }

    updateContent() {
        if (this.entity) {
            this.entity.style = {
                ...this.entity.style,
                html: this.refreshWindow(this.props)
            }
        }
    }

    createLayer() {
        this.containerElement = document.createElement('div')

        const { children, style, ...extra } = this.props
        const _options = PickOptions<sxii.graphic.DivBillboardEntityOptions>(extra)

        const InitContent = this.refreshWindow(this.props)

        _options.style = {
            ..._options.style,
            ...style,
            html: InitContent
        }

        this.entity = new sxii.graphic.DivBillboardEntity(_options)

        this.entity.addTo(this.context)

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventEntityMap,
            prevProps: {},
            nextProps: this.props,
            instance: this.entity
        })


        this.onLoad()
    }

    refreshWindow(props: DivBillboardProps): string {
        const { children, className } = props
        const str = this.setChild(children, className)
        return str
    }

    setChild(children: React.ReactNode, className?: string): string {
        return `<div class='${className || ''}'>${renderToString(<>{children}</>)}</div>`
    }

    onLoad() {
        if (this.entity && this.props.onLoad) {
            this.props.onLoad(this.entity)
        }
    }

    render() {
        return null
    }
}
