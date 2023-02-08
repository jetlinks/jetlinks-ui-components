import { paginationProps } from 'ant-design-vue/es/pagination'

export const PaginationProps = {
    ...paginationProps(),
    /**
     *  是否显示分页内容
     */
    isShowContent: {
        type: Boolean,
        default: false
    }
}