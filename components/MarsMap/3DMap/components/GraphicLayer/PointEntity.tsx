import { DeleteAttr } from '.';
import {
    EventEntityMapProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventEntityMap,
    handleLable,
    PickOptions,
} from '../../utils';

import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    ref,
} from 'vue';

export interface PointProps
    extends Omit<sxii.graphic.BasePointEntityOptions, 'position'>,
        DeleteAttr,
        EventEntityMapProps {
    /** 位置 */
    position: Array<number>;
    /** 像素大小 */
    pixelSize?: number;
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity;
    /** 点标记是否可见，默认为true */
    visible?: boolean;
    onLoad?: (entity: sxii.graphic.PointEntity) => void;
    onUnmount?: (entity: sxii.graphic.PointEntity) => void;
}

const LayerID = 'JetLinks_3DMap_Point_Layer';

const updateMap = {
    position(instance: sxii.graphic.PointEntity, position: Array<number>) {
        instance.position = position;
    },
    style(instance: sxii.graphic.PointEntity, style: object) {
        instance.style = { ...instance.style, ...style };
    },
    pixelSize(instance: sxii.graphic.PointEntity, pixelSize: number) {
        instance.style = { ...instance.style, pixelSize };
    },
    label(instance: sxii.graphic.PointEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label),
        };
    },
    visible(instance: sxii.graphic.PointEntity, visible: boolean) {
        instance.show = visible;
    },
};

const Props = {
    position: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    label: {
        type: Object as PropType<sxii.style.LabelEntity>,
        default: () => ({}),
    },
    style: {
        type: Object as PropType<sxii.style.PointEntityStyle>,
        default: () => ({}),
    },
    visible: {
        type: Boolean,
        default: true,
    },
    onLoad: {
        type: Function as PropType<
            (entity: sxii.graphic.BillboardEntity) => void
        >,
        default: undefined,
    },
    onUnmount: {
        type: Function as PropType<
            (entity: sxii.graphic.BillboardEntity) => void
        >,
        default: undefined,
    },
    onClick: {
        type: Function as PropType<
            (entity: sxii.graphic.BillboardEntity) => void
        >,
        default: undefined,
    },
};
export default defineComponent({
    name: 'Marker',
    inheritAttrs: false,
    props: Props,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const map: sxii.Map = inject('map');
        const layer = ref<sxii.layer.GraphicLayer | undefined>();
        const entity = ref<sxii.graphic.BillboardEntity | undefined>();

        onMounted(() => {
            layer.value = getLayer() || createLayer();

            createPoint();
        });

        onUnmounted(() => {
            if (entity.value) {
                if (props.onUnmount) {
                    props.onUnmount(entity.value);
                }
                UnRegisterEvents(props, entity.value, EventEntityMap);

                entity.value.destroy(true);

                if (layer.value && !layer.value.getGraphics().length) {
                    layer.value.destroy(true);
                }
            }
        });

        const getLayer = () => {
            const _layer = map.getLayer({
                id: LayerID,
            }) as sxii.layer.GraphicLayer;
            return _layer;
        };

        const createLayer = () => {
            let _layer = new sxii.layer.GraphicLayer({
                name: 'marker-layer',
                id: LayerID,
                zIndex: 1,
            });

            _layer.addTo(map);
            return _layer;
        };

        const createPoint = () => {
            let _options =
                PickOptions<sxii.graphic.BasePointEntityOptions>(props);
            _options.id = 'point';
            // console.log('point _options: ', _options);
            entity.value = new sxii.graphic.PointEntity(_options);
            if (layer.value) {
                entity.value.addTo(layer.value);
            }

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventEntityMap,
                prevProps: {},
                nextProps: props,
                instance: entity.value,
            });

            onLoad();
        };

        const onLoad = () => {
            if (entity.value && props.onLoad) {
                props.onLoad(entity.value);
            }
        };
    },
});
