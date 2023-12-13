import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    ref,
} from 'vue';
import {
    applyUpdaterToNextProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventLayerMap,
    EventLayerMapProps,
    PickOptions,
} from '../../utils';

export interface DeleteAttr {
    /**@default {false} false:会自动删除释放所有属性，true：不删除绑定的变量 */
    isDeleteAttr?: boolean;
}

export interface GraphicLayerProps
    extends sxii.layer.GraphicLayerOptions,
        DeleteAttr,
        EventLayerMapProps {
    onLoad?: (layer: sxii.layer.GraphicLayer) => void;
    onUnmount?: (layer: sxii.layer.GraphicLayer) => void;
}

const updateMap = {
    hasEdit(layer: sxii.layer.GraphicLayer, edit: boolean) {
        layer.hasEdit = edit;
    },
};

interface State {
    load: boolean;
}

const Props = {
    onLoad: {
        type: Function as PropType<GraphicLayerProps['onLoad']>,
        default: () => {},
    },
    onUnmount: {
        type: Function as PropType<GraphicLayerProps['onUnmount']>,
        default: () => {},
    },
};

export default defineComponent({
    name: 'GraphicLayer',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const map: sxii.Map = inject('map');
        const layer = ref<sxii.layer.GraphicLayer | undefined>();
        const load = ref(false);

        onMounted(() => {
            createLayer();
        });

        onUnmounted(() => {
            if (layer.value) {
                if (props.onUnmount) {
                    props.onUnmount(layer.value);
                }
                UnRegisterEvents(props, layer.value, EventLayerMap);

                layer.value.remove(true);

                if (layer.value && !layer.value.getGraphics().length) {
                    layer.value.destroy(true);
                }
            }
        });

        const createLayer = () => {
            let _options = PickOptions<sxii.graphic.BaseGraphicOptions>(props);
            _options.name = 'graphic-layer';
            layer.value = new sxii.layer.GraphicLayer(_options);

            layer.value.addTo(map);

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventLayerMap,
                prevProps: {},
                nextProps: props,
                instance: layer.value,
            });

            load.value = true;
            onLoad();
        };

        const onLoad = () => {
            if (layer.value && props.onLoad) {
                props.onLoad(layer.value);
            }
        };

        return () => {
            return <>{load.value ? slots.default?.() : null}</>;
        };
    },
});
