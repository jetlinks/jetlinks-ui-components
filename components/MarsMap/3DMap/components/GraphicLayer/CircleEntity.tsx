import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface CircleProps extends Omit<sxii.graphic.CircleEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 点标记在地图上显示的位置 */
    position: Array<number>
    /** 半径 */
    radius: number
    /** 高度差（圆柱本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.CircleEntity) => void
    onUnmount?: (entity: sxii.graphic.CircleEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.CircleEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.CircleEntity, style: Pick<sxii.graphic.CircleEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    radius(instance: sxii.graphic.CircleEntity, radius: number) {
        instance.style = { ...instance.style, radius }
    },
    diffHeight(instance: sxii.graphic.CircleEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight }
    },
    label(instance: sxii.graphic.CircleEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.CircleEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class CircleEntity extends PureComponent<CircleProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.CircleEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: CircleProps) {
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
        const _options = PickOptions<sxii.graphic.CircleEntityOptions>(this.props)
        console.log(_options);
        this.entity = new sxii.graphic.CircleEntity(_options)
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
