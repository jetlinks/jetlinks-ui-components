import { PropType, defineComponent, onMounted, onUnmounted, ref } from 'vue';
import { injectScript as injectScriptUtil } from './utils';
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
        default: () => {},
    },
    onError: {
        type: Function as PropType<(error: Error) => void>,
        default: () => {},
    },
    onUnmount: {
        type: Function as PropType<() => void>,
        default: () => {},
    },
};

export default defineComponent({
    name: 'LoadScript',
    inheritAttrs: false,
    props: LoadScriptProps,
    emits: [],
    setup(props, { emit, attrs, slots }) {
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
            const objs = [
                'http://Mars3d.cn/lib/Cesium/Widgets/widgets.css',
                'http://Mars3d.cn/lib/Cesium/Cesium.js',
            ];

            injectScriptUtil(objs)
                .then(() => {
                    // require('./sxii/sxii.css');
                    // require('./sxii/sxii');
                    Promise.all([
                        import('./sxii/sxii.css'),
                        import('./sxii/sxii.js'),
                    ]).then(([sxiiCss, sxii]) => {
                        // console.log('sxiiCss111---------: ', sxiiCss);
                        // console.log('sxii222:-----', sxii);
                        interval.value = window.setInterval(() => {
                            checkIfScriptLoaded();
                        }, 200);
                    });
                })
                .catch((err) => {
                    console.log('injectScript:' + err);
                });
        };

        const onLoad = () => {
            const { onLoad } = props;
            if (onLoad) {
                onLoad();
            }
        };

        const checkIfScriptLoaded = () => {
            if (!!window.sxii) {
                console.log('地图API加载完成');

                loaded.value = true;
                onLoad();
                window.clearInterval(interval.value);
            }
        };

        return () => {
            return (
                <>
                    {loaded.value ? (
                        slots.default?.()
                    ) : (
                        <div style={{ textAlign: 'center' }}>加载中...</div>
                    )}
                </>
            );
        };
    },
});
