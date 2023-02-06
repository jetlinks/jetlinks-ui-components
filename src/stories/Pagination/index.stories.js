import MyPagination from '../../components/Pagination';

export default {
    title: '导航/Pagination',
    component: MyPagination,
    argTypes: {
        // props属性的类型，用于复杂类型
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
    },
};

const Template = (args) => ({
    components: { MyPagination },
    setup() {
        return { args };
    },
    template: '<MyPagination v-bind="args" />',
});

export const Pagination = Template.bind({});

Pagination.args = {
    /**
     * props属性
     */
    isShowContent: false,
    total: 12,
    size: 'small',
    showTotal: (total) => `共 ${total} 条`,
};

Pagination.parameters = {
    docs: {
        source: {
            code: '<Pagination :isShowContent="false"/>',
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
