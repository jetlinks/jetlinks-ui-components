import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface CorridorProps extends Omit<sxii.graphic.CorridorEntityOptions, 'positions'>, DeleteAttr, EventEntityMapProps {
    /** 坐标位置 */
    positions: Array<Array<number>>
    /** 走廊宽度，指定走廊边缘之间的距离 */
    width?: number
    /** 高度差（走廊本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.CorridorEntity) => void
    onUnmount?: (entity: sxii.graphic.CorridorEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.CorridorEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.CorridorEntity, style: Pick<sxii.graphic.CorridorEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    width(instance: sxii.graphic.CorridorEntity, width: number) {
        instance.style = { ...instance.style, width }
    },
    diffHeight(instance: sxii.graphic.CorridorEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight }
    },
    label(instance: sxii.graphic.CorridorEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.CorridorEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class CorridorEntity extends PureComponent<CorridorProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.CorridorEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: CorridorProps) {
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
        const _options = PickOptions<sxii.graphic.CorridorEntityOptions>(this.props)
        this.entity = new sxii.graphic.CorridorEntity(_options)
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
