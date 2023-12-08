import { isBoolean } from 'lodash'
import React, { PureComponent } from 'react'
import MapContext from '../MapContext'
import {
    EventLayerMapProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventLayerMap,
    handleImage,
    EventEntityMap,
} from '../utils'
import { PickOptions } from '../utils'
import { MarkerProps, updateMap as updateMarkerMap } from './Marker'

export interface MarkersChildrenProps extends MarkerProps {
    layer?: sxii.layer.GraphicLayer
}

export interface MarkersProps extends sxii.layer.GraphicLayerOptions, EventLayerMapProps {
    markers: Array<MarkerProps>
    onLoad?: (entity: sxii.layer.GraphicLayer) => void
    onUnmount?: (entity: sxii.layer.GraphicLayer) => void
}

interface MarkersState {
    load?: boolean
}

const MarkerLayerID = 'JetLinks_3DMap_Markers_Layer'
const defaultClustering = {
    enabled: true,
    pixelRange: 20,
}

const updateMap = {
    clustering: (instance: sxii.layer.GraphicLayer, clustering: sxii.layer.ClusteringOptions) => {
        instance.clustering = isBoolean(clustering) ? clustering && defaultClustering : clustering
    }
}

export default class Markers extends PureComponent<MarkersProps, MarkersState> {
    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.GraphicLayer | undefined
    state = {
        load: false
    }
    componentDidMount() {
        this.layer = this.getLayer() || this.createLayer()
    }

    componentDidUpdate(prevProps: MarkersProps) {
        if (this.layer) {
            UnRegisterEvents(this.props, this.layer, EventLayerMap)

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventLayerMap,
                prevProps: prevProps,
                nextProps: this.props,
                instance: this.layer
            })
        }
    }

    componentWillUnmount() {
        if (this.layer) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.layer)
            }
            UnRegisterEvents(this.props, this.layer, EventLayerMap)

            this.layer.destroy(true)
        }
    }

    getLayer(): sxii.layer.GraphicLayer {
        return this.map.getLayer({ id: MarkerLayerID }) as sxii.layer.GraphicLayer
    }

    createLayer() {
        const { clustering } = this.props
        let layer = new sxii.layer.GraphicLayer({
            name: 'markers-layer',
            id: MarkerLayerID,
            clustering: isBoolean(clustering) ? clustering && defaultClustering : clustering
        })

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventLayerMap,
            prevProps: {},
            nextProps: this.props,
            instance: layer
        })

        layer.addTo(this.map)

        this.onLoad()
        this.setState({
            load: true
        })
        return layer
    }

    onLoad() {
        if (this.layer && this.props.onLoad) {
            this.props.onLoad(this.layer)
        }
    }

    render() {
        const { markers } = this.props
        return (
            <>
                {
                    markers && this.state.load ?
                        markers.map((item, index) =>
                            <Marker
                                {...item}
                                layer={this.layer}
                                key={'markers_' + index}
                            />
                        )
                        : null
                }
            </>
        )
    }
}


const defaultImageUrl = 'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png'

class Marker extends PureComponent<MarkersChildrenProps> {
    static contextType = MapContext
    entity: sxii.graphic.BillboardEntity | undefined

    componentDidMount() {
        this.createMarker()
    }

    componentDidUpdate(prevProps: MarkersChildrenProps) {
        if (this.entity) {
            UnRegisterEvents(this.props, this.entity, EventEntityMap)

            UpdatePropsAndRegisterEvents({
                updateMap: updateMarkerMap,
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

            this.entity.destroy(true)

        }
    }

    createMarker() {
        const { image, layer, ...extra } = this.props
        let _options = PickOptions<sxii.graphic.BillboardEntityOptions>(extra)
        _options.style = {
            ..._options.style,
            ...handleImage(image, defaultImageUrl),
        }

        this.entity = new sxii.graphic.BillboardEntity(_options)

        if (layer) {
            this.entity.addTo(layer)
        }

        UpdatePropsAndRegisterEvents({
            updateMap: updateMarkerMap,
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

