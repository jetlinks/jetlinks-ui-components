import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MapContext',
    inheritAttrs: false,
    props: {},
    emits: [],
    setup(props, { emit, attrs, slots }) {
        return () => {
            return slots.default?.();
        };
    },
});
