import React, { PureComponent } from 'react'
import MapContext from '../MapContext'
import { injectScript } from '../utils'

export interface EchartsLayerProps extends sxii.layer.EchartsLayerOptions {
    onLoad?: (layer: sxii.layer.EchartsLayer) => void
    onUnmount?: (layer: sxii.layer.EchartsLayer) => void
}

export default class EchartsLayer extends PureComponent<EchartsLayerProps> {
    static contextType = MapContext
    layer: sxii.layer.EchartsLayer | undefined

    componentDidMount() {
        if (!window.echarts) {
            injectScript([
                'http://mars3d.cn/lib/echarts/echarts.min.js',
                'http://mars3d.cn/lib/echarts/echarts-gl.min.js',
            ]).then(() => {
                import('../sxii/plugins/echarts/sxii-echarts.js').then(() => {
                    this.createLayer()
                })
            })
        }

        // 监听屏幕改变
        window.onresize = () => {
            this.resize.bind(this)
        }

    }

    componentDidUpdate() {
        if (this.layer) {
            const { onLoad, onUnmount, ...extra } = this.props
            console.log(extra);
            this.layer.setEchartsOption(extra)
            // UpdatePropsAndRegisterEvents({
            //     updateMap,
            //     eventMap: {},
            //     prevProps: prevProps,
            //     nextProps: this.props,
            //     instance: this.layer
            // })
        }
    }

    componentWillUnmount() {
        if (this.layer) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.layer)
            }
            this.layer.destroy(true)

        }
    }

    createLayer() {
        const { onLoad, onUnmount, ...extra } = this.props
        console.log(extra);
        this.layer = new sxii.layer.EchartsLayer(extra)

        this.layer.addTo(this.context)

        if (onLoad) {
            onLoad(this.layer)
        }
    }

    resize() {
        if (this.layer) {
            this.layer.resize()
        }
    }

    render() {
        return null
    }
}

