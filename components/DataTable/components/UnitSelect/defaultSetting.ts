import type { DefaultOptionType } from 'ant-design-vue/es/select';
import type { PropType } from 'vue';
export const UnitProps = {
    options: {
        type: [Array, Function] as PropType<DefaultOptionType[] | Promise<any>>,
        default: () => [],
    },
};
