import React, { PureComponent } from 'react'
import MapContext from '../MapContext'
import { isEqual } from 'lodash-es'
import { RegisterEvents } from '../utils'

interface GlftModelProps {
    /** 模型url地址 */
    url: string
    /** 模型属性 */
    options?: Omit<sxii.style.ModelEntityStyle, 'url'>
    /** 点击事件 */
    onClick?: (e: any) => void
    /** 模型创建完成 标绘事件 */
    onDrawCreated?: (e: any) => void
    /** 开始编辑 */
    onEditStart?: (e: any) => void
    /** 编辑移动点位 */
    onEditMovePoint?: (e: any) => void
    /** 编辑样式 */
    onEditStyle?: (e: any) => void
    /** 编辑移除点位 */
    onEditRemovePoint?: (e: any) => void
    /** 编辑结束 */
    onEditStop?: (e: any) => void
    /** 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件 */
    onDrawMouseMove?: (e: any) => void
    /** 移除模型事件 */
    onRemoveGraphic?: () => void
    onLoad?: (layer: sxii.layer.GraphicLayer) => void
    onUnmount?: (layer: sxii.layer.GraphicLayer) => void
}

const events = {
    onDrawCreated: 'draw-created',
    onEditStart: 'edit-start',
    onEditMovePoint: 'edit-move-point',
    onEditStyle: 'edit-style',
    onEditRemovePoint: 'edit-remove-point',
    onEditStop: 'edit-stop',
    onRemoveGraphic: 'remove-graphic',
}

const ModelLayerID = 'JetLinks_Map3D_Model_Layer'

export default class GlftModel extends PureComponent<GlftModelProps> {

    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.GraphicLayer | undefined
    graphic?: sxii.graphic.ModelEntity

    componentDidMount() {
        this.layer = this.getLayer() || this.createLayer()
        if (this.props.onLoad) {
            this.props.onLoad(this.layer)
        }
        this.createModel()
    }

    componentDidUpdate(prevProps: GlftModelProps) {
        if (this.layer) {
            if (prevProps.url !== this.props.url || (this.props.options && !isEqual(prevProps.options, this.props.options))) {
                this.createModel()
            }
        }
    }

    createLayer() {
        let layer = new sxii.layer.GraphicLayer({
            name: 'model',
            id: ModelLayerID,
            hasEdit: true,
            isAutoEditing: true, //绘制完成后是否自动激活编辑
        })

        layer.bindContextMenu([
            {
                text: '完成绘制',
                callback: () => {
                    layer.disableEdit()
                    layer.closePopup()
                    // layer.closeTooltip()
                }
            }
        ])

        RegisterEvents(this.props, layer, events)

        layer.addTo(this.map)

        return layer
    }

    getLayer(): sxii.layer.GraphicLayer {
        return this.map.getLayer({ id: ModelLayerID }) as sxii.layer.GraphicLayer
    }

    createModel() {
        const { url, options } = this.props
        if (url && this.layer) {
            this.layer.startDraw({
                type: 'model',
                drawShow: true,
                style: { scale: 1, ...options, modelUrl: url }
            })
        }
    }

    render() {
        return null
    }
}
