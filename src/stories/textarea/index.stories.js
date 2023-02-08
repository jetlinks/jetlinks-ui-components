import MyTextarea from '../../components/Textarea';

export default {
    title: '导航/Textarea',
    component: MyTextarea,
};

const Template = (args) => ({
    components: { MyTextarea },
    setup() {
        return { args };
    },
    template: `<MyTextarea v-bind="args" style="width: 300px" />`,
});

export const Textarea = Template.bind({});

Textarea.args = {
    /**
     * props属性
     */
    disabled: false,
    showCount: false,
    maxlength: 200,
    rows: 3,
    placeholder: '请输入',
};

Textarea.parameters = {
    docs: {
        source: {
            code: '<Textarea />',
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
