import MyMessage from '../../components/Message'

export default {
  title: '导航/Message',
  component: MyMessage,
  argTypes: {
    // props属性的类型，用于复杂类型
    type: {
      control: { type: 'select' },
      options: [
        'open',
        'success',
        'error',
        'info',
        'warning',
        'warn',
        'loading',
      ],
    },
  },
}

const Template = args => ({
  components: { MyMessage },
  setup() {
    return { args }
  },
  template: '<MyMessage v-bind="args" />',
})

export const Message = Template.bind({})

Message.args = {
  /**
   * props属性
   */
  type: 'success',
}

Message.parameters = {
  docs: {
    source: {
      code: `
      JMessage({
            type: 'success',
            content: 'success测试',
        })
      `,
      language: 'html',
      type: 'auto',
      format: true,
    },
  },
}
