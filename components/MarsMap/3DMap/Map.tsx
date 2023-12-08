import React, { PureComponent } from 'react'
import LoadScript from './LoadScript'
import Sxii, { MapProps } from './sxiiMap'

class Map extends PureComponent<MapProps> {
    render() {
        return (
            <LoadScript> <Sxii {...this.props} /> </LoadScript>
        )
    }
}

export default Map
