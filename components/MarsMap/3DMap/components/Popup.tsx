import React, { PureComponent } from 'react'
import MapContext from '../MapContext'

export interface PopupProps {
    position: Array<number>
    content: string | Function | sxii.graphic.BaseGraphic | sxii.layer.BaseGraphicLayer
    options: sxii.PopupProps
}

export default class Popup extends PureComponent<PopupProps> {
    static contextType = MapContext
    map: sxii.Map = this.context

    componentDidMount() {
        const { position, content, options } = this.props
        this.map.openPopup(position, content, options)
    }

    componentWillUnmount() {
        this.map.closePopup()
    }

    render() {
        return null
    }
}
