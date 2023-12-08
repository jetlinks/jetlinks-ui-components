import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface PointProps extends Omit<sxii.graphic.BasePointEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** 像素大小 */
    pixelSize?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PointEntity) => void
    onUnmount?: (entity: sxii.graphic.PointEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.PointEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.PointEntity, style: object) {
        instance.style = { ...instance.style, ...style }
    },
    pixelSize(instance: sxii.graphic.PointEntity, pixelSize: number) {
        instance.style = { ...instance.style, pixelSize }
    },
    label(instance: sxii.graphic.PointEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.PointEntity, visible: boolean) {
        instance.show = visible
    }
}

export default class PointEntity extends PureComponent<PointProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PointEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PointProps) {
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
        const _options = PickOptions<sxii.graphic.BasePointEntityOptions>(this.props)
        this.entity = new sxii.graphic.PointEntity(_options)
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
