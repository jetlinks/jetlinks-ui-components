import { MessageArgsProps } from 'ant-design-vue/es/message'
import { message } from 'ant-design-vue'

message.config({
  maxCount: 1,
})
export const JMessage = (config: MessageArgsProps) => {
  message[config.type](config)
}

export const config: MessageArgsProps = [
  {
    type: 'open',
    content: 'open测试',
  },
  {
    type: 'success',
    content: 'success测试',
  },
  {
    type: 'error',
    content: 'error测试',
  },
  {
    type: 'info',
    content: 'info测试',
  },
  {
    type: 'warning',
    content: 'warning测试',
  },
  {
    type: 'loading',
    content: 'loading测试',
    onClose: () => {
      console.log('loading测试')
    },
  },
]
