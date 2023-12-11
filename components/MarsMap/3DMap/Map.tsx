import {
    onMounted,
    computed,
    defineComponent,
    provide,
    reactive,
    watchEffect,
    toRefs,
} from 'vue';
import LoadScript from './LoadScript';
import Sxii, { MapProps } from './sxiiMap';
export default defineComponent({
    name: 'JMarsMap',
    inheritAttrs: false,
    props: MapProps,
    emits: [],
    setup(props, { emit, attrs, slots }) {
        return () => {
            return (
                <LoadScript>
                    <Sxii {...props} />
                </LoadScript>
            );
        };
    },
});
