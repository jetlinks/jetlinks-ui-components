// import MyTree from './Tree.vue'
import MyTree from './Tree.vue'
export default {
  title: '导航/Tree',
  component: { MyTree },
  argTypes: {
  },
}

const Template = (args) => ({
  components: { MyTree },
  setup() {
      return { args };
  },
  template: `<MyTree v-bind="args"/>`,
});

export const Tree = Template.bind({});

Tree.args = {
    /**
     * props属性
     */
}

Tree.parameters = {
    docs: {
        source: {
            code: '<Tree />',
            language: "html",
            type: 'auto',
            format: true
        }
    }
}