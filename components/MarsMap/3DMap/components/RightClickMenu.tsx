import React, { PureComponent } from 'react'
import MapContext from '../MapContext'

export interface RightClickMenuProps {
    menu: Array<sxii.ContextMenuOptions>
}

export default class RightClickMenu extends PureComponent<RightClickMenuProps> {

    static contextType = MapContext
    map: sxii.Map = this.context

    componentDidMount() {
        this.createContexMenu()
    }

    componentDidUpdate() {
        if (this.map) {
            this.removeContexMenu()
            this.createContexMenu()
        }
    }

    componentWillUnmount() {
        this.removeContexMenu()
    }

    createContexMenu() {
        if (this.map) {
            this.map.bindContextMenu(this.props.menu)
        }
    }

    removeContexMenu() {
        if (this.map) {
            this.map.unbindContextMenu()
        }
    }

    render() {
        return null
    }
}
