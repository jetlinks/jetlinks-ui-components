import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface EllipseProps extends Omit<sxii.graphic.EllipseEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** 椭圆时的 短半径 */
    semiMinorAxis?: number
    /** 椭圆时的 长半径 */
    semiMajorAxis?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 添加文本标注 */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.EllipseEntity) => void
    onUnmount?: (entity: sxii.graphic.EllipseEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.EllipseEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.EllipseEntity, style: Pick<sxii.graphic.EllipseEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    semiMinorAxis(instance: sxii.graphic.EllipseEntity, semiMinorAxis: number) {
        instance.style = { ...instance.style, semiMinorAxis }
    },
    semiMajorAxis(instance: sxii.graphic.EllipseEntity, semiMajorAxis: number) {
        instance.style = { ...instance.style, semiMajorAxis }
    },
    label(instance: sxii.graphic.EllipseEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.EllipseEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class EllipseEntity extends PureComponent<EllipseProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.EllipseEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: EllipseProps) {
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
        const _options = PickOptions<sxii.graphic.EllipseEntityOptions>(this.props)
        this.entity = new sxii.graphic.EllipseEntity(_options)
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
