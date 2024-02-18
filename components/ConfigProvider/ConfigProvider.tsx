import ConfigProvider from 'ant-design-vue/lib/config-provider';
import { Empty } from '../components';
import { defineComponent, reactive, provide } from 'vue';
import { configProviderProps } from 'ant-design-vue/lib/config-provider/context';

const JConfigProvider = defineComponent({
    name: 'JConfigProvider',
    props: {
        ...configProviderProps(),
        IconConfig: {
            type: Object,
        },
    },
    setup(props, { attrs, slots }) {
        return () => {
            const IconConfig = reactive(props.IconConfig || {});

            provide('jetlinks-icon', IconConfig);

            return (
                <ConfigProvider
                    {...props}
                    v-slots={{
                        renderEmpty: () =>
                            slots.renderEmpty ? (
                                slots.renderEmpty?.()
                            ) : (
                                <Empty />
                            ),
                        ...slots,
                    }}
                ></ConfigProvider>
            );
        };
    },
});
JConfigProvider.config = ConfigProvider.config;
export default JConfigProvider;
