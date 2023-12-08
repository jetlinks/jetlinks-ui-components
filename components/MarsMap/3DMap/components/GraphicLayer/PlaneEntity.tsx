import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, PlaneOptionsProps, handleCartesian, handlePlane, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface PlaneProps extends Omit<sxii.graphic.PlaneEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 中心位置 */
    position: Array<number>
    /** plane尺寸, 默认10 */
    dimensions: Array<number>
    /**@default {'z'} 指定平面的法线和距离。默认z */
    plane?: PlaneOptionsProps
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PlaneEntity) => void
    onUnmount?: (entity: sxii.graphic.PlaneEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.PlaneEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.PlaneEntity, style: Pick<sxii.graphic.PlaneEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    dimensions(instance: sxii.graphic.PlaneEntity, dimensions: Array<number>) {
        instance.style = {
            ...instance.style,
            dimensions: handleCartesian(dimensions)
        }
    },
    plane(instance: sxii.graphic.PlaneEntity, plane: PlaneOptionsProps) {
        instance.style = {
            ...instance.style,
            ...handlePlane(plane)
        }
    },
    label(instance: sxii.graphic.PlaneEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.PlaneEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class PlaneEntity extends PureComponent<PlaneProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PlaneEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PlaneProps) {
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
        const _options = PickOptions<sxii.graphic.PlaneEntityOptions>(this.props)
        _options.style = {
            plane_normal: 'x',
            plane_distance: 0,
            ..._options.style
        }
        this.entity = new sxii.graphic.PlaneEntity(_options)
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
