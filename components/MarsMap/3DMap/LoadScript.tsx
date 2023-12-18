import {PropType, defineComponent, onMounted, onUnmounted, ref} from 'vue';
import {injectScript as injectScriptUtil} from './utils';
// import './sxii/sxii.css';
// import './sxii/sxii';
interface ILoadScriptState {
    loaded: boolean;
}

export interface ILoadScriptProps {
    onLoad?: () => void;
    onError?: (error: Error) => void;
    onUnmount?: () => void;
}

let cleaningUp = false;
const LoadScriptProps = {
    onLoad: {
        type: Function as PropType<() => void>,
        default: () => {
        },
    },
    onError: {
        type: Function as PropType<(error: Error) => void>,
        default: () => {
        },
    },
    onUnmount: {
        type: Function as PropType<() => void>,
        default: () => {
        },
    },
};

export default defineComponent({
    name: 'LoadScript',
    inheritAttrs: false,
    props: LoadScriptProps,
    emits: [],
    setup(props, {emit, attrs, slots}) {
        const loaded = ref(false);
        const interval = ref<number | undefined>();

        onMounted(() => {
            console.log('LoadScript');
            if (window.sxii && !cleaningUp) {
                console.log('地图 api 已加载...');
                loaded.value = true;
                return;
            }

            injectScript();
        });

        onUnmounted(() => {
            window.clearInterval(interval.value);
        });

        const injectScript = () => {

            injectScriptUtil([
                '/js/sxii/Cesium/Cesium.js',
                '/js/sxii/Cesium/Widgets/widgets.css',
                '/js/sxii/sxii.js',
                '/js/sxii/plugins/compatible/cesium-version.js',
            ]).then(() => {
                interval.value = window.setInterval(() => {
                    checkIfScriptLoaded();
                }, 200);
            })
        };

        const onLoad = () => {
            const {onLoad} = props;
            if (onLoad) {
                onLoad();
            }
        };

        const checkIfScriptLoaded = () => {
            if (!!window.sxii) {
                console.log('地图API加载完成');
                if (!window.sxii.Util.webglreport()) {
                    window.clearInterval(interval.value);
                    return
                }

                loaded.value = true;
                onLoad();
                window.clearInterval(interval.value);
            } else {
            }
        };

        return () => {
            return (
                <>
                    {loaded.value ? (
                        slots.default?.()
                    ) : (
                        <div style={{textAlign: 'center'}}>加载中...</div>
                    )}
                </>
            );
        };
    },
});
