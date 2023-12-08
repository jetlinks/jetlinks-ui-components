import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, handleLable, handleCartesian } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface EllipsoidProps extends Omit<sxii.graphic.EllipsoidEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 位置 */
    position: Array<number>
    /** 指定椭球半径 */
    radii?: Array<number>
    /** 指定椭球的内半径 */
    innerRadii?: Array<number>
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true */
    visible?: boolean
    onLoad?: (entity: sxii.graphic.EllipsoidEntity) => void
    onUnmount?: (entity: sxii.graphic.EllipsoidEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.EllipsoidEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.EllipsoidEntity, style: Pick<sxii.graphic.CircleEntityOptions, 'style'>) {
        instance.style = style
    },
    radii(instance: sxii.graphic.BoxEntity, radii: Array<number>) {
        instance.style = {
            ...instance.style,
            radii: handleCartesian(radii)
        }
    },
    innerRadii(instance: sxii.graphic.BoxEntity, innerRadii: Array<number>) {
        instance.style = {
            ...instance.style,
            innerRadii: handleCartesian(innerRadii)
        }
    },
    label(instance: sxii.graphic.BillboardEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.EllipsoidEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class EllipsoidEntity extends PureComponent<EllipsoidProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.EllipsoidEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: EllipsoidProps) {
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
        const _options = PickOptions<sxii.graphic.EllipsoidEntityOptions>(this.props)
        const entity = new sxii.graphic.EllipsoidEntity(_options)
        entity.addTo(this.context)

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventEntityMap,
            prevProps: {},
            nextProps: this.props,
            instance: entity
        })

        this.setState({
            entity
        }, this.onLoad)
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
