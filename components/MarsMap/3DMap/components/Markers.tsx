import { isBoolean } from 'lodash';
import {
    EventLayerMapProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventLayerMap,
    handleImage,
    EventEntityMap,
    PickOptions,
} from '../utils';

import Marker, { IMarkerProps, updateMap as updateMarkerMap } from './Marker';
import { PropType, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { useMap } from '../../hooks/useMap';

export interface MarkersChildrenProps extends IMarkerProps {
    layer?: sxii.layer.GraphicLayer;
}

export interface MarkersProps
    extends sxii.layer.GraphicLayerOptions,
        EventLayerMapProps {
    markers: Array<IMarkerProps>;
    onLoad?: (entity: sxii.layer.GraphicLayer) => void;
    onUnmount?: (entity: sxii.layer.GraphicLayer) => void;
}

interface MarkersState {
    load?: boolean;
}

const MarkerLayerID = 'JetLinks_3DMap_Markers_Layer';
const defaultClustering = {
    enabled: true,
    pixelRange: 20,
};

const updateMap = {
    clustering: (
        instance: sxii.layer.GraphicLayer,
        clustering: sxii.layer.ClusteringOptions,
    ) => {
        instance.clustering = isBoolean(clustering)
            ? clustering && defaultClustering
            : clustering;
    },
};
const Props = {
    markers: {
        type: Array as PropType<Array<IMarkerProps>>,
        default: () => [],
    },
    onLoad: {
        type: Function as PropType<MarkersProps['onLoad']>,
        default: () => {},
    },
    onUnmount: {
        type: Function as PropType<MarkersProps['onUnmount']>,
        default: () => {},
    },
};
export default defineComponent({
    name: 'Marker',
    inheritAttrs: false,
    props: Props,
    emits: ['click'],
    setup(props, { emit, attrs, slots }) {
        const map: sxii.Map | null = useMap();
        let layer: sxii.layer.GraphicLayer | undefined = undefined;
        const load = ref(false);
        onMounted(() => {
            layer = getLayer() || createLayer();
        });

        onUnmounted(() => {
            if (layer) {
                if (props.onUnmount) {
                    props.onUnmount(layer);
                }
                UnRegisterEvents(props, layer, EventEntityMap);

                layer.destroy(true);

                if (layer && !layer.getGraphics().length) {
                    layer.destroy(true);
                }
            }
        });

        const getLayer = (): sxii.layer.GraphicLayer => {
            const _layer = map.getLayer({
                id: MarkerLayerID,
            }) as sxii.layer.GraphicLayer;
            return _layer;
        };

        const createLayer = () => {
            // const { clustering } = props;
            let _layer = new sxii.layer.GraphicLayer({
                name: 'markers-layer',
                id: MarkerLayerID,
                // clustering: isBoolean(clustering)
                //     ? clustering && defaultClustering
                //     : clustering,
            });

            _layer.addTo(map);
            onLoad();
            load.value = true;
            return _layer;
        };

        const onLoad = () => {
            if (layer && props.onLoad) {
                props.onLoad(layer);
            }
        };

        return () => {
            const { markers } = props;
            return (
                <>
                    {markers && load.value
                        ? markers.map((item, index) => (
                              <Marker
                                  {...item}
                                  layer={layer}
                                  key={'markers_' + index}
                              />
                          ))
                        : null}
                </>
            );
        };
    },
});
