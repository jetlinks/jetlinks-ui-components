import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface WallProps extends Omit<sxii.graphic.WallEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    positions: Array<Array<number>>
    /** 高度差（圆柱本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.WallEntity) => void
    onUnmount?: (entity: sxii.graphic.WallEntity) => void
}

const updateMap = {
    positions(instance: sxii.graphic.WallEntity, positions: Array<Array<number>>) {
        instance.positions = positions
    },
    style(instance: sxii.graphic.WallEntity, style: Pick<sxii.graphic.WallEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    diffHeight(instance: sxii.graphic.WallEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight }
    },
    label(instance: sxii.graphic.WallEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.WallEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class WallEntity extends PureComponent<WallProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.WallEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: WallProps) {
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
        const _options = PickOptions<sxii.graphic.WallEntityOptions>(this.props)
        this.entity = new sxii.graphic.WallEntity(_options)
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
