import * as $Icon from '@ant-design/icons-vue';
import { createVNode } from 'vue';

export const AntdIcon = (props: { type: string }) => {
    const { type } = props;
    const antIcon: { [key: string]: any } = $Icon;
    return createVNode(antIcon[type]);
};
