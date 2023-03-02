import { Row } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { rowProps } from 'ant-design-vue/lib/grid/Row';

export const baseProps = {
    ...rowProps(),
};

export default defineComponent({
    name: 'JSpace',
    props: baseProps,
    setup(props, { slots }) {
        return () => <Row {...props}>{slots.default?.()}</Row>;
    },
});
