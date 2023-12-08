import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface RectangleProps extends Omit<sxii.graphic.RectangleEntityOptions, 'positions'>, DeleteAttr, EventEntityMapProps {
    positions: Array<Array<number>>
    /** 高度差（矩形本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number
    /** 旋转角度 */
    rotation?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.RectangleEntity) => void
    onUnmount?: (entity: sxii.graphic.RectangleEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.RectangleEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.RectangleEntity, style: Pick<sxii.graphic.RectangleEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    diffHeight(instance: sxii.graphic.RectangleEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight }
    },
    rotation(instance: sxii.graphic.RectangleEntity, rotation: number) {
        instance.style = { ...instance.style, rotation }
    },
    label(instance: sxii.graphic.RectangleEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.RectangleEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class RectangleEntity extends PureComponent<RectangleProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.RectangleEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: RectangleProps) {
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
        const _options = PickOptions<sxii.graphic.RectangleEntityOptions>(this.props)
        this.entity = new sxii.graphic.RectangleEntity(_options)
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
