import MapContext from '../MapContext'
import { RegisterEvents, UnRegisterEvents } from '../utils'
import React, { PureComponent } from 'react'

interface ModelLayerProps extends sxii.layer.ModelLayerOptions {
    onLoad?: (layer: sxii.layer.ModelLayer) => void
    onUnmount?: (layer: sxii.layer.ModelLayer) => void
}

const eventMap = {
    onClick: 'click'
}

export default class ModelLayer extends PureComponent<ModelLayerProps> {
    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.ModelLayer | undefined

    componentDidMount() {
        this.createLayer()
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        if (this.layer && this.map) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.layer)
            }
            UnRegisterEvents(this.props, this.layer, eventMap)
            this.layer.remove(true)
        }
    }

    createLayer() {
        this.layer = new sxii.layer.ModelLayer(this.props)

        RegisterEvents(this.props, this.layer, eventMap)

        this.layer.addTo(this.map)

        this.onLoad()
    }

    onLoad() {
        if (this.layer && this.props.onLoad) {
            this.props.onLoad(this.layer)
        }
    }

    render() {
        return null
    }
}
