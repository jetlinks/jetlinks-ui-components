import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import React, { PureComponent } from 'react'
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface ModelProps extends Omit<sxii.graphic.ModelEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** glTF模型的URI的字符串或资源属性 */
    url?: string
    /** 比例 */
    scale?: number
    /** 点标记是否可见，默认为true */
    visible?: boolean
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    onLoad?: (entity: sxii.graphic.ModelEntity) => void
    onUnmount?: (entity: sxii.graphic.ModelEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.ModelEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.ModelEntity, style: Pick<sxii.graphic.ModelEntityOptions, 'style'>) {
        instance.style = style
    },
    scale(instance: sxii.graphic.ModelEntity, scale: number) {
        instance.style = { ...instance.style, scale }
    },
    url(instance: sxii.graphic.ModelEntity, url: number) {
        instance.style = { ...instance.style, url }
    },
    label(instance: sxii.graphic.ModelEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.BillboardEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class ModelEntity extends PureComponent<ModelProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.ModelEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: ModelProps) {
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
        const _options = PickOptions<sxii.graphic.ModelEntityOptions>(this.props)
        this.entity = new sxii.graphic.ModelEntity(_options)
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
