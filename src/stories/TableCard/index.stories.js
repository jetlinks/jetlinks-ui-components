/* eslint-disable @typescript-eslint/no-empty-function */
import MyTableCard from '../../components/TableCard';

export default {
    title: '导航/TableCard',
    component: MyTableCard,
    argTypes: {},
};

const Template = (args) => ({
    components: { MyTableCard },
    setup() {
        return { args };
    },
    template: `<MyTableCard v-bind="args">
        <template #content>
            <div>中间内容</div>
        </template>
    </MyTableCard>`,
});

export const TableCard = Template.bind({});

TableCard.args = {
    name: '空调',
    status: { text: '正常', color: '#4AEADC', value: '' },
    cardData: {},
    actions: [
        { name: '编辑', onClick: () => {} },
        { name: '启用', onClick: () => {}, icon: 'CheckOutlined' },
    ],
    moreActions: [
        { name: '下载', onClick: () => {}, icon: 'CiOutlined' },
        { name: '删除', onClick: () => {}, icon: 'DeleteOutlined' },
    ],
};

TableCard.parameters = {
    docs: {
        source: {
            code: `<TableCard>`,
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
