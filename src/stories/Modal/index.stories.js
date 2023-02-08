import MyModal from '../../components/Modal';

export default {
    title: '导航/Modal',
    component: MyModal,
    argTypes: {
        // props属性的类型，用于复杂类型
        // title:'string'
    },
};

const Template = (args) => ({
    components: { MyModal },
    setup() {
        return { args };
    },
    template: '<MyModal v-bind="args" />',
});

export const Modal = Template.bind({});

Modal.args = {
    /**
     * props属性
     */
    draggable: false,
};

Modal.parameters = {
    docs: {
        source: {
            code: `
// <JModal
//   placement="topLeft"
//   okText="ok"
//   cancelText="不想ok"
//   title="ok？"
// >
//   <a>topLeft</a>
// </JModal>


`,
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
