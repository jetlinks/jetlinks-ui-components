import ConfigProvider from 'ant-design-vue/lib/config-provider';
import { Empty } from '../components';
import { defineComponent, reactive, ref, provide } from 'vue';
import { configProviderProps } from 'ant-design-vue/lib/config-provider/context';
import { omit } from 'lodash-es';
import { JETLINKS_ICON } from '../AIcon';

const JConfigProvider = defineComponent({
    name: 'JConfigProvider',
    props: {
        ...configProviderProps(),
        IconConfig: {
            type: Object,
        },
    },
    setup(props, { slots }) {
        const IconConfig = reactive(props.IconConfig || {});

        provide(JETLINKS_ICON, IconConfig);

        return () => {
            return (
                <ConfigProvider
                    {...omit(props, ['IconConfig'])}
                    v-slots={{
                        renderEmpty: () =>
                            slots.renderEmpty ? (
                                slots.renderEmpty?.()
                            ) : (
                                <Empty />
                            ),
                        ...slots,
                    }}
                >
                    {slots.default?.()}
                </ConfigProvider>
            );
        };
    },
});
JConfigProvider.config = ConfigProvider.config;
export default JConfigProvider;
