import MyAIcon from '../../components/AIcon';
import Iconkeys from './iconkeys';

export default {
    title: '导航/AIcon',
    component: MyAIcon,
    argTypes: {
        // props属性的类型，用于复杂类型
        type: {
            control: { type: 'select' },
            options: Iconkeys,
        },
    },
};

const Template = (args) => ({
    components: { MyAIcon },
    setup() {
        return { args };
    },
    template: `<MyAIcon v-bind="args" />`,
});

export const AIcon = Template.bind({});

AIcon.args = {
    /**
     * props属性
     */
    type: 'ZoomOutOutlined',
};

AIcon.parameters = {
    docs: {
        source: {
            code: '<AIcon type="ZoomOutOutlined"/>',
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
