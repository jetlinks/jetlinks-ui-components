import MapContext from '../MapContext'
import { RegisterEvents, UnRegisterEvents, TilesetLayerEventProps, TilesetLayerEvent } from '../utils'
import React, { PureComponent } from 'react'
import { assign } from 'lodash'

interface TilesetLayerProps extends sxii.layer.TilesetLayerOptions, TilesetLayerEventProps {
    onLoad?: (layer: sxii.layer.TilesetLayer) => void
    onUnmount?: (layer: sxii.layer.TilesetLayer) => void
}

const eventMap = assign({
    onLoaded: 'load'
}, TilesetLayerEvent)

export default class TilesetLayer extends PureComponent<TilesetLayerProps> {

    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.TilesetLayer | undefined

    componentDidMount() {
        this.createLayer()
        console.log(sxii.EventType)
    }

    componentWillUnmount() {
        if (this.layer) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.layer)
            }

            UnRegisterEvents(this.props, this.layer, eventMap)
            this.layer.remove(true)
        }
    }

    createLayer() {
        this.layer = new sxii.layer.TilesetLayer(this.props)

        this.layer.addTo(this.map)

        RegisterEvents(this.props, this.layer, eventMap)

        this.onLoad()
    }

    onLoad() {
        const { onLoad } = this.props
        if (onLoad && this.layer) {
            onLoad(this.layer)
        }
    }

    render() {
        return null
    }
}
