import MyInput from '../../components/Input';

export default {
    title: '导航/Input',
    component: MyInput,
};

const Template = (args) => ({
    components: { MyInput },
    setup() {
        return { args };
    },
    template: `<MyInput v-bind="args" style="width: 300px" />`,
});

// export const slots = (args) => ({
//     components: { MyInput },
//     setup() {
//         return { args };
//     },
//     template: `
//       <MyInput v-bind="args" style="width: 300px">
//         <template #addonAfter>123</template>
//       </MyInput>
//       `,
// });

export const Input = Template.bind({});
// export const slot = slots.bind({});

Input.args = {
    /**
     * props属性
     */
    disabled: false,
    placeholder: '请输入',
};

Input.parameters = {
    docs: {
        source: {
            code: '<Input />',
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
