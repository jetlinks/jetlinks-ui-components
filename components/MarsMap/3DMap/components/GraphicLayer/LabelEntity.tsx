import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface LabelProps extends Omit<sxii.graphic.LabelEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    position: Array<number>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.LabelEntity) => void
    onUnmount?: (entity: sxii.graphic.LabelEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.LabelEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.LabelEntity, style: Pick<sxii.graphic.LabelEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    label(instance: sxii.graphic.LabelEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    show(instance: sxii.graphic.PointEntity, show: boolean) {
        instance.show = show
    }
}

export default class LabelEntity extends PureComponent<LabelProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.LabelEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: LabelProps) {
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
        const _options = PickOptions<sxii.graphic.LabelEntityOptions>(this.props)
        this.entity = new sxii.graphic.LabelEntity(_options)
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