import { Col } from 'ant-design-vue';
import { defineComponent } from 'vue';
import { colProps } from 'ant-design-vue/lib/grid/Col';
export const baseProps = {
    ...colProps(),
};

export default defineComponent({
    name: 'JSpace',
    props: baseProps,
    setup(props, { slots }) {
        return () => <Col {...props}>{slots.default?.()}</Col>;
    },
});
