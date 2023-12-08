import { useContext, createContext } from 'react'

const DivLayerContext = createContext<sxii.layer.DivLayer | null>(null)

export function useMap() {
    const layer = useContext(DivLayerContext)
    return layer
}

export default DivLayerContext
