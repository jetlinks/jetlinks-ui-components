import MyPopconfirm from '../../components/Popconfirm';

export default {
    title: '导航/Popconfirm',
    component: MyPopconfirm,
    argTypes: {
        // props属性的类型，用于复杂类型
        // title:'string'
    },
};

const Template = (args) => ({
    components: { MyPopconfirm },
    setup() {
        return { args };
    },
    template: '<MyPopconfirm v-bind="args" />',
});

export const Popconfirm = Template.bind({});

Popconfirm.args = {
    /**
     * props属性
     */
    title: '是否确定删除？',
    loading: false,
    okText: '确定',
    cancelText: '取消',
};

Popconfirm.parameters = {
    docs: {
        source: {
            code: `
<JPopconfirm
  placement="topLeft"
  okText="ok"
  cancelText="不想ok"
  title="ok？"
>
  <a>topLeft</a>
</JPopconfirm>


<JPopconfirm">
  <a>top</a>
</JPopconfirm>


<JPopconfirm
  placement="topRight"
  @confirm="confirm"
  :loading="true"
>
  <a>topRight</a>
</JPopconfirm>

const confirm = (e: MouseEvent) => {
  console.log(1, e);
  return new Promise((resolve) => {
      setTimeout(() => resolve(true), 1000);
  });
};
`,
            language: 'html',
            type: 'auto',
            format: true,
        },
    },
};
