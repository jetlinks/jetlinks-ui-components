import MapContext from '../MapContext';
import {
    EventEntityMapProps,
    UnRegisterEvents,
    UpdatePropsAndRegisterEvents,
    EventEntityMap,
    ImageProps,
    handleImage,
    handleOffset,
    handleLable,
    PickOptions,
} from '../utils';

import {
    PropType,
    defineComponent,
    inject,
    onMounted,
    onUnmounted,
    ref,
} from 'vue';

export interface IMarkerProps
    extends Omit<sxii.graphic.BillboardEntityOptions, 'style' | 'position'>,
        EventEntityMapProps {
    /** 点标记在地图上显示的位置 */
    position: Array<number>;
    /** 需在点标记中显示的图标。可以是一个本地图标地址 */
    image?: ImageProps | string;
    /** 点标记显示位置偏移量 */
    offset?: Array<number>;
    /** 添加文本标注 */
    label?: sxii.style.LabelEntity;
    /** 旋转角度 */
    rotation?: number;
    /** 点标记是否可见，默认为true */
    visible?: boolean;
    onLoad?: (entity: sxii.graphic.BillboardEntity) => void;
    onUnmount?: (entity: sxii.graphic.BillboardEntity) => void;
}

const MarkerLayerID = 'JetLinks_3DMap_Marker_Layer';
const defaultImageUrl =
    'https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png';

// 直接赋值 instance.position = position
export const updateMap = {
    position(instance: sxii.graphic.BillboardEntity, position: Array<number>) {
        instance.position = position;
    },
    image(instance: sxii.graphic.BillboardEntity, image: ImageProps | string) {
        instance.style = {
            ...instance.style,
            ...handleImage(image),
        };
    },
    offset(instance: sxii.graphic.BillboardEntity, offset: Array<number>) {
        instance.style = {
            ...instance.style,
            ...handleOffset(offset),
        };
    },
    label(
        instance: sxii.graphic.BillboardEntity,
        label: sxii.style.LabelEntity,
    ) {
        instance.style = {
            ...instance.style,
            label: handleLable(label),
        };
    },
    rotation(instance: sxii.graphic.BillboardEntity, rotation: number) {
        instance.style = { ...instance.style, rotation };
    },
    style(
        instance: sxii.graphic.BillboardEntity,
        style: Pick<sxii.graphic.BillboardEntityOptions, 'style'>,
    ) {
        instance.style = { ...instance.style, ...style };
    },
    visible(instance: sxii.graphic.BillboardEntity, visible: Boolean) {
        instance.show = visible;
    },
};

const MarkerProps = {
    position: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    image: {
        type: [Object, String] as PropType<ImageProps | string>,
        default: defaultImageUrl,
    },
    offset: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    label: {
        type: Object as PropType<sxii.style.LabelEntity>,
        default: () => ({}),
    },
    rotation: {
        type: Number,
        default: 0,
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
};
export default defineComponent({
    name: 'Marker',
    inheritAttrs: false,
    props: MarkerProps,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const contextType = MapContext;
        const map: sxii.Map = inject('map');
        const layer = ref<sxii.layer.GraphicLayer | undefined>();
        const entity = ref<sxii.graphic.BillboardEntity | undefined>();

        onMounted(() => {
            layer.value = getLayer() || createLayer();

            createMarker();
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
                id: MarkerLayerID,
            }) as sxii.layer.GraphicLayer;
            return _layer;
        };

        const createLayer = () => {
            let _layer = new sxii.layer.GraphicLayer({
                name: 'marker-layer',
                id: MarkerLayerID,
                zIndex: 1,
            });

            _layer.addTo(map);
            // console.log('createLayer: ', _layer);
            // console.log('createLayer map: ', map);
            console.log(
                '通过图层id获取图层: ',
                map.getLayerById(MarkerLayerID),
            );
            return _layer;
        };

        const createMarker = () => {
            const { image, ...extra } = props;
            let _options =
                // PickOptions<sxii.graphic.BillboardEntityOptions>(extra);
                PickOptions<sxii.graphic.BasePointEntityOptions>(extra);
            _options.style = {
                // ..._options.style,
                // ...handleImage(image, defaultImageUrl),
                color: 'red',
                pixelSize: 10,
            };

            console.log('_options: ', _options);
            _options.id = 'testID';
            // entity.value = new sxii.graphic.BillboardEntity(_options);
            entity.value = new sxii.graphic.PointEntity(_options);
            if (layer.value) {
                entity.value.addTo(layer.value);
                // console.log('entity.value: ', entity.value);
                // console.log('layer.value111: ', layer.value);
                console.log(
                    '通过图形id获取图形: ',
                    layer.value.getGraphicById('testID'),
                );
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

        // return () => {
        //     return null;
        // };
    },
});
