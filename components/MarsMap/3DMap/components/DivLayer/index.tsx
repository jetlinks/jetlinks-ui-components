import { applyUpdaterToNextProps, UnRegisterEvents, UpdatePropsAndRegisterEvents } from '../../utils';
import React, { PureComponent } from 'react'
import MapContext from '../../MapContext'
import DivLayerContext from './DivLayerContext';
import { EventLayerMap, EventLayerMapProps } from '../../utils';

export interface DeleteAttr {
    /**@default {false} false:会自动删除释放所有属性，true：不删除绑定的变量 */
    isDeleteAttr?: boolean
}

export interface DivLayerProps extends sxii.layer.DivLayerOptions, DeleteAttr, EventLayerMapProps {
    onLoad?: (layer: sxii.layer.DivLayer) => void
    onUnmount?: (layer: sxii.layer.DivLayer) => void
}

interface DivLayerState {
    layer: sxii.layer.DivLayer | null
}

const updateMap = {
    hasEdit(layer: sxii.layer.DivLayer, edit: boolean) {
        layer.hasEdit = edit
    }
}

export default class DivLayer extends PureComponent<DivLayerProps, DivLayerState> {

    static contextType = MapContext
    map: sxii.Map = this.context
    state: DivLayerState = {
        layer: null
    }

    componentDidMount() {
        this.createLayer()
    }

    componentDidUpdate(prevProps: DivLayerProps) {
        if (this.state.layer) {
            applyUpdaterToNextProps(updateMap, prevProps, this.props, this.state.layer)
        }
    }

    componentWillUnmount() {
        if (this.state.layer !== null) {
            if (this.props.onUnmount) {
                this.props.onUnmount(this.state.layer)
            }
            UnRegisterEvents(this.props, this.state.layer, EventLayerMap)

            this.state.layer.destroy(!!this.props.isDeleteAttr)
        }
    }

    createLayer() {
        const { onLoad, onUnmount, children, isDeleteAttr, ...extraOptions } = this.props
        let layer = new sxii.layer.DivLayer(extraOptions)
        layer.addTo(this.map)

        UpdatePropsAndRegisterEvents({
            updateMap,
            eventMap: EventLayerMap,
            prevProps: {},
            nextProps: this.props,
            instance: layer
        })

        this.setState({
            layer
        }, this.onLoad)
    }

    onLoad() {
        if (this.state.layer && this.props.onLoad) {
            this.props.onLoad(this.state.layer)
        }
    }

    render() {
        return <DivLayerContext.Provider value={this.state.layer}>
            {
                this.state.layer ? this.props.children : null
            }
        </DivLayerContext.Provider>
    }
}
