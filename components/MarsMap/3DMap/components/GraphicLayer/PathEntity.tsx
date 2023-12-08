import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

interface PositionType {
    tempTime: Date
    position: Array<number>
}

export interface PathProps extends Omit<sxii.graphic.PathEntityOptions, 'positions'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    positions: Array<PositionType>
    /** 设置是否显示 文本 和对应的样式 */
    labelStyle?: sxii.style.LabelEntity
    /** 设置是否显示 gltf模型 和对应的样式 */
    modelStyle?: sxii.style.ModelEntityStyle
    /** 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项 */
    pointStyle?: sxii.style.PointEntityStyle
    /** 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。 */
    billboardStyle?: sxii.style.BillboardEntityStyle
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.PathEntity) => void
    onUnmount?: (entity: sxii.graphic.PathEntity) => void
}

const updateMap = {
    // positions(instance: sxii.graphic.PathEntity, position: Array<PositionType>) {
    //     instance.position = position.map(item => Cartesian3.fromDegrees(item.position[0], item.position[1], item.position[2] || 50))
    // },
    label(instance: sxii.graphic.PathEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    style(instance: sxii.graphic.PathEntity, style: Pick<sxii.graphic.PathEntityOptions, 'style'>) {
        instance.style = style
    },
    // labelStyle(instance: sxii.graphic.PathEntity, style: sxii.style.LabelEntity) {
    //     instance.label = style
    // },
    // modelStyle(instance: sxii.graphic.PathEntity, style: sxii.style.ModelEntityStyle) {
    //     instance.style = style
    // },
    // pointStyle(instance: sxii.graphic.PathEntity, style: sxii.style.PointEntityStyle) {
    //     instance.style = style
    // },
    // billboardStyle(instance: sxii.graphic.PathEntity, style: sxii.style.BillboardEntityStyle) {
    //     instance.style = style
    // },
    visible(instance: sxii.graphic.PathEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class PathEntity extends PureComponent<PathProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.PathEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: PathProps) {
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
        const {
            labelStyle,
            modelStyle,
            pointStyle,
            billboardStyle,
            ...extra
        } = this.props
        const _options = PickOptions<sxii.graphic.PathEntityOptions>(extra)
        this.entity = new sxii.graphic.PathEntity({
            ..._options,
            label: labelStyle,
            model: modelStyle,
            point: pointStyle,
            billboard: billboardStyle
        })
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
