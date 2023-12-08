import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface PolygonProps extends Omit<sxii.graphic.PolygonEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 坐标位置 */
    positions: Array<Array<number>>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 高度差（多边形本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PolygonEntity) => void
    onUnmount?: (entity: sxii.graphic.PolygonEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.PolygonEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.PolygonEntity, style: Pick<sxii.graphic.PolygonEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    diffHeight(instance: sxii.graphic.PolygonEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight: diffHeight }
    },
    label(instance: sxii.graphic.PolygonEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.PolygonEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class PolygonEntity extends PureComponent<PolygonProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PolygonEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PolygonProps) {
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
        const _options = PickOptions<sxii.graphic.PolygonEntityOptions>(this.props)
        this.entity = new sxii.graphic.PolygonEntity(_options)
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
