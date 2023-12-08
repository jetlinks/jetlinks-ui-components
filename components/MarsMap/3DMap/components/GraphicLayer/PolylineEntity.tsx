import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface PolylineProps extends Omit<sxii.graphic.PolylineEntityOptions, 'positions'>, DeleteAttr, EventEntityMapProps {
    positions: Array<Array<number>>
    width?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PolylineEntity) => void
    onUnmount?: (entity: sxii.graphic.PolylineEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.PolylineEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.PolylineEntity, style: Pick<sxii.graphic.PolylineEntityOptions, 'style'>) {
        instance.style = style
    },
    label(instance: sxii.graphic.PolylineEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    width(instance: sxii.graphic.PolylineEntity, width: number) {
        instance.style = { ...instance.style, width }
    },
    visible(instance: sxii.graphic.PolylineEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class PolylineEntity extends PureComponent<PolylineProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PolylineEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PolylineProps) {
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
        const _options = PickOptions<sxii.graphic.PolylineEntityOptions>(this.props)
        this.entity = new sxii.graphic.PolylineEntity(_options)
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
