import MyAutoComplete from '../../components/AutoComplete'
import { Textarea, Select } from 'ant-design-vue';
export default {
    title: '导航/AutoComplete',
    component: { MyAutoComplete },
    argTypes: { // props属性的类型，用于复杂类型
    }
}

const Template = (args) => ({
    components: { MyAutoComplete, Select, Textarea },
    setup() {
        return { args };
    },
    template: `<MyAutoComplete v-bind="args" />`,
});

export const AutoComplete = Template.bind({});

AutoComplete.args = {
    /**
     * props属性
     */
    // value: '123',
    width: '200px',
    options: [
      { value: 'Burns Bay Road' },
      { value: 'Downing Street' },
      { value: 'Wall Street' },
    ],
}

AutoComplete.parameters = {
    docs: {
        source: {
            code: '<AutoComplete />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}