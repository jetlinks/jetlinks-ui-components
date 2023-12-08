import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface CylinderProps extends Omit<sxii.graphic.CylinderEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** 顶部半径，指定圆柱体顶部的半径，当为0时即为圆锥。 */
    topRadius?: number
    /** 底部半径，指定圆柱体底部半径。 */
    bottomRadius?: number
    /** 高度，柱面长度。 */
    length?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.CylinderEntity) => void
    onUnmount?: (entity: sxii.graphic.CylinderEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.CylinderEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.CylinderEntity, style: Pick<sxii.graphic.CircleEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    topRadius(instance: sxii.graphic.CylinderEntity, topRadius: number) {
        instance.style = { ...instance.style, topRadius }
    },
    bottomRadius(instance: sxii.graphic.CylinderEntity, bottomRadius: number) {
        instance.style = { ...instance.style, bottomRadius }
    },
    length(instance: sxii.graphic.CylinderEntity, length: number) {
        instance.style = { ...instance.style, length }
    },
    label(instance: sxii.graphic.CylinderEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.CylinderEntity, visible: Boolean) {
        instance.show = visible
    },
}

export default class CylinderEntity extends PureComponent<CylinderProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.CylinderEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: CylinderProps) {
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
        const _options = PickOptions<sxii.graphic.CylinderEntityOptions>(this.props)
        this.entity = new sxii.graphic.CylinderEntity(_options)
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
