import { selectProps } from 'ant-design-vue/lib/select'

export const SelectProps = {
    ...selectProps(),
    /**
     *  宽度
     */
    width: {
      type: String,
      default: '200px'
    },
    /**
     * 是否支持搜索
     */
    filterable: {
      type: Boolean,
      default: false
    }
}