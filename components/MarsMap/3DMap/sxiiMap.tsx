import MapContext from './MapContext';
import {
    UpdatePropsAndRegisterEvents,
    applyUpdaterToNextProps,
    UnRegisterEvents,
    EventBaseMap,
    EventBaseMapProps,
} from './utils';
import { defaultBaseMapOptions } from './config';
import './sxii.css';
import {
    CSSProperties,
    PropType,
    VNode,
    defineComponent,
    onMounted,
    onUnmounted,
    provide,
    ref,
    watch,
} from 'vue';

interface MapState {
    map: sxii.Map | null;
}

const MapIds: string[] = [];

export interface IMapProps extends EventBaseMapProps {
    children?: VNode;
    /**
     * 地图中心位置 [lng, lat, alt, heading, pitch, roll]
     * @param lng 经度值, 180 - 180
     * @param lat 纬度值, -90 - 90
     * @param alt 高度值
     * @param heading 方向角度值，绕垂直于地心的轴旋转角度, 0-360
     * @param pitch 俯仰角度值，绕纬度线旋转角度, 0-360
     * @param roll 翻滚角度值，绕经度线旋转角度, 0-360
     */
    center: Array<number>;
    /**
     * 地图配置信息
     * @typedef {Object} sxii.MapOptions
     */
    options?: sxii.MapOptions;
    /**
     * 地图容器样式
     */
    mapContainerStyle?: CSSProperties;
    /**
     * 地图容器class
     */
    mapContainerClassName?: string;
    /** 实例加载完成事件 */
    onLoad?: (map: sxii.Map) => void | Promise<void>;
    /** 实例移除完成事件 */
    onUnmount?: (map: sxii.Map) => void | Promise<void>;
}

const updateMap = {
    center(map: sxii.Map, center: Array<number>) {
        const [lng, lat, alt] = center;
        map?.setCameraView({ lng, lat, alt });
    },
};

export const MapProps = {
    center: {
        type: Array as PropType<number[]>,
        default: () => [],
    },
    options: {
        type: Object as PropType<Partial<sxii.MapOptions>>,
        default: () => ({}),
    },
    mapContainerStyle: {
        type: Object as PropType<CSSProperties>,
        default: () => ({}),
    },
    mapContainerClassName: {
        type: String,
        default: '',
    },
    onLoad: {
        type: Function as PropType<(map: sxii.Map) => void | Promise<void>>,
        default: undefined,
    },
    onUnmount: {
        type: Function as PropType<(map: sxii.Map) => void | Promise<void>>,
        default: undefined,
    },
};

export default defineComponent({
    name: 'MarsMap',
    inheritAttrs: false,
    props: MapProps,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        const map = ref<sxii.Map | null>(null);
        const mapRef = ref<any>();
        // const id = ref<string>(`JetLinkss_Map3D_${MapIds.length}`);
        const id = ref<string>(`JetLinkss_Map3D_${new Date().getTime()}`);

        const getInstance = () => {
            if (mapRef.value === null) {
                return null;
            }

            return new sxii.Map(id.value, {
                ...defaultBaseMapOptions,
                ...props,
            });
        };

        const setMapCallback = () => {
            if (map.value !== null) {
                if (props.onLoad) {
                    props.onLoad(map.value);
                }
            }
        };

        onMounted(() => {
            map.value = getInstance();
            provide('map', map.value);

            UpdatePropsAndRegisterEvents({
                updateMap,
                eventMap: EventBaseMap,
                prevProps: {},
                nextProps: props,
                instance: map.value,
            });
            MapIds.push(id.value);
            setMapCallback();
        });

        watch(
            () => props,
            (newVal, oldVal) => {
                applyUpdaterToNextProps(updateMap, newVal, oldVal, map.value);
            },
        );

        onUnmounted(() => {
            if (map.value !== null) {
                if (props.onUnmount) {
                    props.onUnmount(map.value);
                }
                UnRegisterEvents(props, map.value, EventBaseMap);
                map.value.destroy();
            }
        });

        return () => {
            return (
                <div class="Jetlinks-3DMap">
                    <div
                        id={id.value}
                        ref={mapRef.value}
                        style={props.mapContainerStyle}
                        class={[
                            'Jetlinks-3DMap-content',
                            props.mapContainerClassName,
                        ]}
                    >
                        {map.value !== null ? slots.default?.() : null}
                        {/* <MapContext.Provider value={map.value}>
                            {map.value !== null ? slots.default?.() : <></>}
                        </MapContext.Provider> */}
                    </div>
                </div>
            );
        };
    },
});
