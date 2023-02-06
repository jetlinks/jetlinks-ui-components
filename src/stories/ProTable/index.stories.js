import MyProTable from '../../components/ProTable'

export default {
    title: '导航/ProTable',
    component: MyProTable,
    argTypes: { // props属性的类型，用于复杂类型
        // size: {
        //     control: { type: 'select' },
        //     options: ['small', 'medium', 'large'],
        // }
    }
}

const Template = (args) => ({
    components: { MyProTable },
    setup() {
        return { args };
    },
    template: '<MyProTable v-bind="args" />',
});

export const ProTable = Template.bind({});

ProTable.args = {
    /**
     * props属性
     */
    type: ''
}

ProTable.parameters = {
    docs: {
        source: {
            code: '<ProTable />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}

export const ScrollTable = Template.bind({});

ScrollTable.args = {
    type: 'scroll'
};

ScrollTable.parameters = {
    docs: {
        source: {
            code: '<ProTable type="scroll" />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}