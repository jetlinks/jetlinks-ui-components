import { applyUpdaterToNextProps, UnRegisterEvents, UpdatePropsAndRegisterEvents } from '../../utils';
import React, { PureComponent } from 'react'
import MapContext from '../../MapContext'
import GraphicLayerContext from './GraphicLayerContext';
import { EventLayerMap, EventLayerMapProps } from '../../utils'

export interface DeleteAttr {
    /**@default {false} false:会自动删除释放所有属性，true：不删除绑定的变量 */
    isDeleteAttr?: boolean
}

export interface GraphicLayerProps extends sxii.layer.GraphicLayerOptions, DeleteAttr, EventLayerMapProps {
    onLoad?: (layer: sxii.layer.GraphicLayer) => void
    onUnmount?: (layer: sxii.layer.GraphicLayer) => void
}

const updateMap = {
    hasEdit(layer: sxii.layer.GraphicLayer, edit: boolean) {
        layer.hasEdit = edit
    }
}

interface State {
    load: boolean
}

export default class GraphicLayer extends PureComponent<GraphicLayerProps, State> {

    static contextType = MapContext
    map: sxii.Map = this.context
    layer: sxii.layer.GraphicLayer | null = null
    state: State = {
        load: false
    }

    componentDidMount() {
        this.createLayer()
    }

    componentDidUpdate(prevProps: GraphicLayerProps) {
        if (this.layer) {
            applyUpdaterToNextProps(updateMap, prevProps, this.props, this.layer)
        }
    }

    componentWillUnmount() {
        if (this.layer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.layer)
            }
            UnRegisterEvents(this.props, this.layer, EventLayerMap)

            this.layer.remove(!!this.props.isDeleteAttr)
        }
    }

    createLayer() {
        const { onLoad, onUnmount, children, isDeleteAttr, ...extraOptions } = this.props
        this.layer = new sxii.layer.GraphicLayer(extraOptions)
        this.layer.addTo(this.map)

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventLayerMap,
            prevProps: {},
            nextProps: this.props,
            instance: this.layer
        })

        this.setState({
            load: true
        }, this.onLoad)
    }

    onLoad() {
        if (this.layer && this.props.onLoad) {
            this.props.onLoad(this.layer)
        }
    }

    render() {
        return <GraphicLayerContext.Provider value={this.layer}>
            {
                this.state.load ? this.props.children : null
            }
        </GraphicLayerContext.Provider>
    }
}
