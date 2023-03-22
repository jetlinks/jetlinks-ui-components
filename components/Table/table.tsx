import Table from 'ant-design-vue/lib/table/Table';
import { Empty } from '../components';
import { defineComponent } from 'vue';

const JTable = defineComponent({
    name: 'JTable',
    inheritAttrs: false,
    setup(_props, { attrs, slots }) {
        return () => {
            return (
                <Table
                    {...attrs}
                    v-slots={{
                        emptyText: () => {
                            if (slots?.emptyText) {
                                return slots.emptyText();
                            } else {
                                return <Empty />;
                            }
                        },
                        ...slots,
                    }}
                ></Table>
            );
        };
    },
});

export default JTable;
