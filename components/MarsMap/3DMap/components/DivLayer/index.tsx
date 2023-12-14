import {
    applyUpdaterToNextProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventLayerMap,
    EventLayerMapProps,
    PickOptions,
} from '../../utils';
import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    provide,
    ref,
} from 'vue';

export interface DeleteAttr {
    /**@default {false} false:会自动删除释放所有属性，true：不删除绑定的变量 */
    isDeleteAttr?: boolean;
}

export interface DivLayerProps
    extends sxii.layer.DivLayerOptions,
        DeleteAttr,
        EventLayerMapProps {
    onLoad?: (layer: sxii.layer.DivLayer) => void;
    onUnmount?: (layer: sxii.layer.DivLayer) => void;
}

interface DivLayerState {
    layer: sxii.layer.DivLayer | null;
}

const updateMap = {
    hasEdit(layer: sxii.layer.DivLayer, edit: boolean) {
        layer.hasEdit = edit;
    },
};

const Props = {
    /**
     * false:会自动删除释放所有属性，true：不删除绑定的变量
     */
    isDeleteAttr: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: '',
    },
    onLoad: {
        type: Function as PropType<(entity: sxii.layer.DivLayer) => void>,
        default: undefined,
    },
    onUnmount: {
        type: Function as PropType<(entity: sxii.layer.DivLayer) => void>,
        default: undefined,
    },
};
export default defineComponent({
    name: 'DivLayer',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const map: sxii.Map = inject('map');
        let layer: sxii.layer.DivLayer | null = null

        onMounted(() => {
            createLayer();
        });

        onUnmounted(() => {
            if (layer) {
                if (props.onUnmount) {
                    props.onUnmount(layer);
                }
                UnRegisterEvents(props, layer, EventLayerMap);

                layer.destroy(props.isDeleteAttr);
            }
        });

        const createLayer = () => {
            let _options = PickOptions<sxii.layer.DivLayerOptions>(props);
            _options.id = 'DivLayer';
            // console.log('DivLayer _options: ', _options);
            layer = new sxii.layer.DivLayer(_options);
            layer.addTo(map);
            provide('DivLayer', layer);

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventLayerMap,
                prevProps: {},
                nextProps: props,
                instance: layer,
            });

            onLoad();
        };

        const onLoad = () => {
            if (layer && props.onLoad) {
                props.onLoad(layer);
            }
        };

        return () => {
            return <>{layer ? slots.default?.() : null}</>;
        };
    },
});
