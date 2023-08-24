import ConfigProvider from 'ant-design-vue/lib/config-provider';
import { Empty } from '../components';
import { defineComponent } from 'vue';

const JConfigProvider = defineComponent({
    name: 'JConfigProvider',
    setup(props, { attrs, slots }) {
        return () => {
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

export default JConfigProvider;
