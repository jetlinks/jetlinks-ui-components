import { useContext, createContext } from 'react'

const GraphicLayerContext = createContext<sxii.layer.GraphicLayer | null>(null)

export function useMap() {
    const layer = useContext(GraphicLayerContext)
    return layer
}

export default GraphicLayerContext
