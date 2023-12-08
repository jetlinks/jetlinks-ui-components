import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

type ShapeType = 'pipeline' | 'circle ' | 'star'

export interface PolylineVolumeProps extends Omit<sxii.graphic.PolylineVolumeEntityOptions, 'positions'>, DeleteAttr, EventEntityMapProps {
    positions: Array<Array<number>>
    /** 半径 */
    radius?: number
    /** pipeline (解释：空心管),circle (解释：实心管),star (解释：星状管 */
    shape?: ShapeType
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PolylineVolumeEntity) => void
    onUnmount?: (entity: sxii.graphic.PolylineVolumeEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.PolylineVolumeEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.PolylineVolumeEntity, style: Pick<sxii.graphic.PolylineVolumeEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    radius(instance: sxii.graphic.PolylineVolumeEntity, radius: number) {
        instance.style = { ...instance.style, radius }
    },
    label(instance: sxii.graphic.PolylineVolumeEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.PolylineVolumeEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class PolylineVolumeEntity extends PureComponent<PolylineVolumeProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PolylineVolumeEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PolylineVolumeProps) {
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
        const _options = PickOptions<sxii.graphic.PolylineVolumeEntityOptions>(this.props)
        this.entity = new sxii.graphic.PolylineVolumeEntity(_options)
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
