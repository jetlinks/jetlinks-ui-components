import React, { PureComponent } from 'react'
import MapContext from '../MapContext'

type LayerType = 'gaode' | 'baidu' | 'gmap' | 'xyz' | 'tdt' | 'bing' | 'wms' | 'tencent'


export interface LayerProps {
    /**
     * 图层类型
     * gaode 高德地图图层
     * baidu 百度地图图层
     * gmap 谷歌地图图层
     * tdt 天地图图图层
     */
    type: LayerType
    /** 如果type等于 xyz,则url必传 */
    options?: LayerOptions
    onLoad?: (e: sxii.layer.BaseTileLayer) => void
    onUnmount?: (e: sxii.layer.BaseTileLayer) => void
}

interface LayerOptions extends sxii.layer.BaseTileLayerOptions {
    layer?: 'vec' | 'img_d' | 'img_z' | 'custom' | 'time' | string
    layers?: string
    bigfont?: Boolean
    url?: Cesium.Resource | string
}

export default class Layer extends PureComponent<LayerProps> {

    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.BaseTileLayer | null = null

    componentDidMount() {
        this.createLayer(this.props.type, this.props.options)
    }

    componentDidUpdate(prevProps: LayerProps) {
        if (this.props.type !== prevProps.type) {
            this.remove()
            this.createLayer(this.props.type, this.props.options)
        }
    }

    componentWillUnmount() {
        if (this.layer && this.props.onUnmount) {
            this.props.onUnmount(this.layer)
        }
        this.remove()
    }

    createLayer(type: LayerType, options: LayerOptions = {}) {

        switch (type) {
            case 'gaode':
                this.layer = new sxii.layer.GaodeLayer(options)
                break;
            case 'baidu':
                this.layer = new sxii.layer.BaiduLayer(options)
                break;
            case 'gmap':
                this.layer = new sxii.layer.GoogleLayer(options)
                break;
            case 'tencent':
                this.layer = new sxii.layer.TencentLayer(options)
                break;
            case 'xyz':
                this.layer = new sxii.layer.XyzLayer({
                    url: 'http://data.marsgis.cn/geoserver/gwc/service/tms/1.0.0/mars%3Ahfgh3857@EPSG%3A3857@png/{z}/{x}/{reverseY}.png',
                    rectangle: { xmin: 116.850438, xmax: 117.635666, ymin: 31.5375784, ymax: 32.16236297 },
                    crs: 'EPSG:3857',
                    ...options
                })
                break;
            case 'wms':
                this.layer = new sxii.layer.WmsLayer(options)
                break;
            case 'bing':
                this.layer = new sxii.layer.BingLayer(options)
                break;
            default:
                this.layer = new sxii.layer.BaseTileLayer(options)
                break;
        }

        this.map.addLayer(this.layer)

        if (this.props.onLoad) {
            this.props.onLoad(this.layer)
        }
    }

    remove() {
        if (this.layer && this.map) {
            console.log('移除');
            this.layer.remove(true)
        }
    }

    render() {
        return null
    }
}
