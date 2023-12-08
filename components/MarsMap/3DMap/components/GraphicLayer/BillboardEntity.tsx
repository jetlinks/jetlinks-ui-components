import React, { PureComponent } from 'react'
import { UnRegisterEvents, UpdatePropsAndRegisterEvents, PickOptions, EventEntityMap, EventEntityMapProps, ImageProps, handleImage, handleOffset, handleLable } from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';

export interface BillboardProps extends Omit<sxii.graphic.BillboardEntityOptions, 'position'>, DeleteAttr, EventEntityMapProps {
    /** 点标记在地图上显示的位置 */
    position: Array<number>
    /** 需在点标记中显示的图标。可以是一个本地图标地址 */
    image?: ImageProps | string
    /** 点标记显示位置偏移量 */
    offset?: Array<number>
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity
    /** 点标记是否可见，默认为true 
     * @default true
    */
    visible?: boolean
    /** 图像大小的比例 */
    scale?: number
    /** 旋转角度 */
    rotation?: number
    onLoad?: (entity: sxii.graphic.BillboardEntity) => void
    onUnmount?: (entity: sxii.graphic.BillboardEntity) => void
}

const updateMap = {
    position(instance: sxii.graphic.BillboardEntity, position: Array<number>) {
        instance.position = position
    },
    style(instance: sxii.graphic.BillboardEntity, style: Pick<sxii.graphic.BillboardEntityOptions, 'style'>) {
        instance.style = { ...instance.style, ...style }
    },
    image(instance: sxii.graphic.BillboardEntity, image: ImageProps | string) {
        instance.style = {
            ...instance.style,
            ...handleImage(image)
        }
    },
    scale(instance: sxii.graphic.BillboardEntity, scale: number) {
        instance.style = { ...instance.style, scale }
    },
    rotation(instance: sxii.graphic.BillboardEntity, rotation: number) {
        instance.style = { ...instance.style, rotation }
    },
    offset(instance: sxii.graphic.BillboardEntity, offset: Array<number>) {
        instance.style = {
            ...instance.style,
            ...handleOffset(offset)
        }
    },
    label(instance: sxii.graphic.BillboardEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label)
        }
    },
    visible(instance: sxii.graphic.BillboardEntity, visible: Boolean) {
        instance.show = visible
    }
}

export default class BillboardEntity extends PureComponent<BillboardProps> {

    static contextType = GraphicLayerContext
    entity: sxii.graphic.BillboardEntity | undefined
    componentDidMount() {
        if (this.context) {
            this.createLayer()
        } else {
            console.error('没有找到父组件GraphicLayer,请添加。')
        }
    }

    componentDidUpdate(prevProps: BillboardProps) {

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
        const _options = PickOptions<sxii.graphic.BillboardEntityOptions>(this.props)
        this.entity = new sxii.graphic.BillboardEntity(_options)
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
