import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleOffset, handleLable, handleCartesian } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface BoxProps extends Omit<sxii.graphic.BoxEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    position: Array<number>
    /** plane尺寸, 默认10 */
    dimensions: Array<number>
    /** 点标记显示位置偏移量 */
    offset?: Array<number>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.BoxEntity) => void
    onUnmount?: (entity: sxii.graphic.BoxEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.BoxEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.BoxEntity, style: Pick<sxii.graphic.BoxEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    dimensions(instance: sxii.graphic.BoxEntity, dimensions: Array<number>) {
        instance.style = {
            ...instance.style,
            dimensions: handleCartesian(dimensions)
        }
    },
    offset(instance: sxii.graphic.BoxEntity, offset: Array<number>) {
        instance.style = {
            ...instance.style,
            ...handleOffset(offset)
        }
    },
    label(instance: sxii.graphic.BoxEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.BoxEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class BoxEntity extends PureComponent<BoxProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.BoxEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: BoxProps) {
        if (this.entity) {
            UnRegisterEvents(this.props, this.entity, EventEntityMap)

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventEntityMap,
                prevProps: prevProps,
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
        const _options = PickOptions<sxii.graphic.BoxEntityOptions>(this.props)
        this.entity = new sxii.graphic.BoxEntity(_options)
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
