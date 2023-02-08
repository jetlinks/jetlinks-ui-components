import MySelect from '../../components/Select'
import { SelectOption } from 'ant-design-vue'

export default {
    title: '导航/Select',
    component: { MySelect },
    argTypes: { // props属性的类型，用于复杂类型
        size: {
            control: { type: 'select' },
            options: ['small', 'middle', 'large'],
        }
    }
}

const Template = (args) => ({
    components: { MySelect, SelectOption },
    setup() {
        return { args };
    },
    template: `<MySelect v-bind="args" :filterable="args.filterable" />`,
});

export const Select = Template.bind({});

Select.args = {
    /**
     * props属性
     */
    width: '200px',
    filterable: false,
    options: [...Array(60)].map((_, i) => ({ value: (i + 10).toString(36) + (i + 1) })),
}

Select.parameters = {
    docs: {
        source: {
            code: '<Select />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}