import {
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    PickOptions,
    EventEntityMap,
    EventEntityMapProps,
    handleLable,
} from '../../utils';
import { DeleteAttr } from '.';
import GraphicLayerContext from './GraphicLayerContext';
import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    ref,
} from 'vue';

export interface PolygonProps
    extends Omit<sxii.graphic.PolygonEntityOptions, 'position'>,
        DeleteAttr,
        EventEntityMapProps {
    /** 坐标位置 */
    positions: Array<Array<number>>;
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity;
    /** 高度差（多边形本身的高度），与extrudedHeight二选一。 */
    diffHeight?: number;
    /** 点标记是否可见，默认为true */
    visible?: boolean;
    onLoad?: (entity: sxii.graphic.PolygonEntity) => void;
    onUnmount?: (entity: sxii.graphic.PolygonEntity) => void;
}

const LayerID = 'JetLinks_3DMap_Polygon_Layer';
const updateMap = {
    positions(
        instance: sxii.graphic.PolygonEntity,
        positions: Array<Array<number>>,
    ) {
        instance.positions = positions;
    },
    style(
        instance: sxii.graphic.PolygonEntity,
        style: Pick<sxii.graphic.PolygonEntityOptions, 'style'>,
    ) {
        instance.style = { ...instance.style, ...style };
    },
    diffHeight(instance: sxii.graphic.PolygonEntity, diffHeight: number) {
        instance.style = { ...instance.style, diffHeight: diffHeight };
    },
    label(instance: sxii.graphic.PolygonEntity, label: sxii.style.LabelEntity) {
        instance.style = {
            ...instance.style,
            label: handleLable(label),
        };
    },
    visible(instance: sxii.graphic.PolygonEntity, visible: Boolean) {
        instance.show = visible;
    },
};
const Props = {
    positions: {
        type: Array as PropType<Array<Array<number>>>,
        required: true,
    },
    visible: {
        type: Boolean,
        default: true,
    },
    label: {
        type: Object as PropType<sxii.style.LabelEntity>,
        default: () => ({}),
    },
    style: {
        type: Object as PropType<sxii.style.PolygonEntityStyle>,
        default: () => ({}),
    },
    diffHeight: {
        type: Number,
        default: 0,
    },
    onLoad: {
        type: Function as PropType<
            (entity: sxii.graphic.PolygonEntity) => void
        >,
        default: undefined,
    },
    onUnmount: {
        type: Function as PropType<
            (entity: sxii.graphic.PolygonEntity) => void
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
        const layer: sxii.layer.GraphicLayer | undefined =
            inject('graphicLayer');
        const entity = ref<sxii.graphic.PolygonEntity | undefined>();

        onMounted(() => {
            createPolygon();
        });

        onUnmounted(() => {
            if (entity.value) {
                if (props.onUnmount) {
                    props.onUnmount(entity.value);
                }
                UnRegisterEvents(props, entity.value, EventEntityMap);

                entity.value.destroy(true);
            }
        });

        const createPolygon = () => {
            let _options =
                PickOptions<sxii.graphic.PolygonEntityOptions>(props);
            _options.id = 'polygon';
            // console.log('polygon _options: ', _options);
            entity.value = new sxii.graphic.PolygonEntity(_options);
            if (layer) {
                entity.value.addTo(layer);
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
