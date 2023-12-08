import React, { PureComponent } from 'react'
import { ImageProps, UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleOffset, handleLable, handleImage } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface FontBillboardProps extends Omit<sxii.graphic.FontBillboardEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** 需在点标记中显示的图标。可以是一个本地图标地址 */
    image?: ImageProps | string
    /** 点标记显示位置偏移量 */
    offset?: Array<number>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.FontBillboardEntity) => void
    onUnmount?: (entity: sxii.graphic.FontBillboardEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.FontBillboardEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.FontBillboardEntity, style: Pick<sxii.graphic.FontBillboardEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    image(instance: sxii.graphic.FontBillboardEntity, image: ImageProps | string) {
        instance.style = {
            ...instance.style,
            ...handleImage(image)
        }
    },
    offset(instance: sxii.graphic.FontBillboardEntity, offset: Array<number>) {
        instance.style = {
            ...instance.style,
            ...handleOffset(offset)
        }
    },
    label(instance: sxii.graphic.FontBillboardEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.FontBillboardEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class FontBillboardEntity extends PureComponent<FontBillboardProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.FontBillboardEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: FontBillboardProps) {
        if (this.entity) {
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

    createLayer() {
        const _options = PickOptions<sxii.graphic.FontBillboardEntityOptions>(this.props)
        this.entity = new sxii.graphic.FontBillboardEntity(_options)
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

    onLoad() {
        if (this.entity && this.props.onLoad) {
            this.props.onLoad(this.entity)
        }
    }

    render() {
        return null
    }
}
