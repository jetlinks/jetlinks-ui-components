import { UnRegisterEvents, UpdatePropsAndRegisterEvents } from '../../utils';
import React, { PureComponent } from 'react'
import { DeleteAttr } from '../GraphicLayer';
import DivLayerContext from './DivLayerContext';
import { PickOptions, EventDivGraphicProps, EventDivGraphic } from '../../utils';
import { renderToString } from 'react-dom/server'


export interface DivGraphicProps extends Omit<sxii.graphic.DivGraphicOptions, 'position'>, DeleteAttr, EventDivGraphicProps {
    children?: React.ReactNode
    position: Array<number>
    className?: string
    /** 
     * @default true
     */
    visible?: boolean
    /**
     * @default [0, -28]
     */
    offset?: Array<number>
    onLoad?: (entity: sxii.graphic.DivGraphic) => void
    onUnmount?: (entity: sxii.graphic.DivGraphic) => void
}

const updateMap = {
    position(instance: sxii.graphic.DivGraphic, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.DivGraphic, style: sxii.graphic.DivGraphicOptions) {
        instance.style = style
    },
    visible(instance: sxii.graphic.DivGraphic, visible: Boolean) {
        console.log(visible);
        instance.show = visible
    }
}

export default class DivGraphic extends PureComponent<DivGraphicProps> {

    static contextType = DivLayerContext
    entity: sxii.graphic.DivGraphic | undefined
    containerElement: HTMLDivElement | null = null

    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件DivLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: DivGraphicProps) {
        if (this.entity) {

            UnRegisterEvents(this.props, this.entity, EventDivGraphic)

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventDivGraphic,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.entity
            })

            this.updateContent()
        }
    }

    componentWillUnmount() {
        if (this.entity) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.entity)
            }
            UnRegisterEvents(this.props, this.entity, EventDivGraphic)

            this.entity.destroy(!!this.props.isDeleteAttr)
        }
    }

    updateContent() {
        if (this.entity) {
            this.entity.html = this.refreshWindow(this.props)
        }
    }

    createLayer() {
        this.containerElement = document.createElement('div')

        const { children, style, position, offset, ...extra } = this.props


        const _options = PickOptions<sxii.graphic.DivGraphicOptions>(extra)

        const InitContent = this.refreshWindow(this.props)

        const [offsetX, offsetY] = offset || [0, -28]
        const [x = 0, y = 0, z = 3] = position
        _options.position = [x, y, z]

        _options.style = {
            ...style,
            html: InitContent,
            offsetX,
            offsetY
        }

        this.entity = new sxii.graphic.DivGraphic(_options)

        this.entity.addTo(this.context)

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventDivGraphic,
            prevProps: {},
            nextProps: this.props,
            instance: this.entity
        })

        this.onLoad()
    }

    refreshWindow(props: DivGraphicProps): string {
        const { children, className } = props
        const str = this.setChild(children, className)
        return str
    }

    setChild(children: React.ReactNode, className?: string): string {
        return className ? `<div class='${className}'>${renderToString(<>{children}</>)}</div>` : renderToString(<>{children}</>)
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
