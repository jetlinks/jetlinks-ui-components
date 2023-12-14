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
    watch,
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
        default: '', // defaultImageUrl
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
    emits: ['click'],
    setup(props, { emit, attrs, slots }) {
        const contextType = MapContext;
        const map: sxii.Map = inject('map');
        let layer: sxii.layer.GraphicLayer | undefined = undefined;
        let entity: sxii.graphic.BillboardEntity | undefined = undefined;
        onMounted(() => {
            layer = getLayer() || createLayer();

            createMarker();
        });

        onUnmounted(() => {
            if (entity) {
                if (props.onUnmount) {
                    props.onUnmount(entity);
                }
                UnRegisterEvents(props, entity, EventEntityMap);

                entity.destroy(true);

                if (layer && !layer.getGraphics().length) {
                    layer.destroy(true);
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
            return _layer;
        };

        const createMarker = () => {
            const { image, ...extra } = props;
            let _options =
                PickOptions<sxii.graphic.BillboardEntityOptions>(extra);
            _options.style = {
                ..._options.style,
                ...handleImage(image, defaultImageUrl),
            };

            // console.log('_options: ', _options);
            _options.id = 'testID';
            entity = new sxii.graphic.BillboardEntity(_options);
            if (layer) {
                entity.addTo(layer);
                entity.on('click', () => {
                    emit('click', entity);
                });
            }

            // UpdatePropsAndRegisterEvents({
            //     updateMap,
            //     eventMap: EventEntityMap,
            //     prevProps: {},
            //     nextProps: props,
            //     instance: entity,
            // });

            onLoad();
        };

        const onLoad = () => {
            if (entity && props.onLoad) {
                props.onLoad(entity);
            }
        };

        // return () => {
        //     return null;
        // };
    },
});
