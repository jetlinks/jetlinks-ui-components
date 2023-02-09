import type { TableProps } from 'ant-design-vue/es/table'
import { defineComponent, PropType, ref, watch, watchEffect } from 'vue';
import { JColumnProps, ModelEnum, RequestData, TypeEnum } from './proTableTypes';
import JTable from './j-table/index';
import ScrollTable from './scroll-table/index'

export interface JProTableProps extends TableProps {
    request?: (params?: Record<string, any>) => Promise<Partial<RequestData>>;
    cardBodyClass?: string;
    columns: JColumnProps[];
    params?: Record<string, any>;
    model?: keyof typeof ModelEnum | undefined; // 显示table还是card
    noPagination?: boolean;
    rowSelection?: TableProps['rowSelection'];
    cardProps?: Record<string, any>;
    dataSource?: Record<string, any>[];
    gridColumn?: number;
    /**
     * 用于不同分辨率
     * gridColumns[0] 1366 ~ 1440 分辨率；
     * gridColumns[1] 1440 ~  1600 分辨率；
     * gridColumns[2] > 1600 分辨率；
     */
    gridColumns?: number[];
    alertRender?: boolean;
    type?: keyof typeof TypeEnum;
    defaultParams?: Record<string, any>;
    bodyStyle?: Record<string, any>;
}

const tableProps = () => {
    return {
        request: {
            type: Function,
            default: undefined
        },
        cardBodyClass: {
            type: String,
            default: ''
        },
        bodyStyle: {
            type: Object,
            default: {}
        },
        columns: {
            type: Array,
            default: () => []
        },
        params: {
            type: Object,
            default: () => { }
        },
        model: {
            type: [String, undefined],
            default: undefined
        },
        noPagination: {
            type: Boolean,
            default: false
        },
        rowSelection: {
            type: Object as PropType<TableProps['rowSelection']>,
            default: () => undefined
        },
        cardProps: {
            type: Object,
            default: undefined
        },
        dataSource: {
            type: Array,
            default: () => []
        },
        gridColumns: {
            type: Array as PropType<Number[]>,
            default: [2, 3, 4]
        },
        gridColumn: {
            type: Number,
            default: 4
        },
        alertRender: {
            type: Boolean,
            default: true
        },
        type: {
            type: String,
            default: 'PAGE'
        },
        defaultParams: {
            type: Object,
            default: () => {
                return {
                    pageIndex: 0,
                    pageSize: 12
                }
            }
        }
    }
}

const JProTable = defineComponent<JProTableProps>({
    name: 'JProTable',
    slots: [
        'headerTitle', // 顶部左边插槽
        'card', // 卡片内容
        'rightExtraRender', // 顶部右边插槽
        'paginationRender' // 分页
    ],
    emits: [
        'cancelSelect' // 刷新数据
    ],
    props: tableProps() as any,
    setup(props: JProTableProps, { slots, emit, expose }) {
        const _dataSource = ref<Record<string, any>[]>([])
        const pageIndex = ref<number>(0)
        const pageSize = ref<number>(6)
        const total = ref<number>(0)
        const loading = ref<boolean>(true)

        const handleSearch = async (_params?: Record<string, any>) => {
            loading.value = true
            if(!props.request){
                _dataSource.value = props?.dataSource || []
            } else {
                // 请求数据
                const resp = await props.request({
                    pageIndex: 0,
                    pageSize: 12,
                    ...props.defaultParams,
                    ..._params,
                    terms: [
                        ...(props.defaultParams?.terms || []),
                        ...(_params?.terms || [])
                    ]
                })
                if (resp.status === 200) {
                    if (props.type === 'PAGE') {
                        // 判断如果是最后一页且最后一页为空，就跳转到前一页
                        if (resp.result.total && resp.result.pageSize && resp.result.pageIndex && resp.result?.data?.length === 0) {
                            handleSearch({
                                ..._params,
                                pageSize: pageSize.value,
                                pageIndex: pageIndex.value > 0 ? pageIndex.value - 1 : 0,
                            })
                        } else {
                            _dataSource.value = resp.result?.data || []
                            pageIndex.value = resp.result?.pageIndex || 0
                            pageSize.value = resp.result?.pageSize || 6
                            total.value = resp.result?.total || 0
                        }
                    } else {
                        _dataSource.value = resp?.result || []
                        total.value = resp?.result?.length || 0
                    }
                } else {
                    _dataSource.value = []
                    
                }
            }
            loading.value = false
        }

        // watchEffect(() => {
        //     console.log(props.dataSource, props.type)
        // })

        watch(
            () => props.params,
            (newValue) => {
                handleSearch(newValue)
            },
            { deep: true, immediate: true }
        )

        watch(
            () => props.dataSource,
            () => {
                if (props.dataSource && !props.request) {
                    handleSearch(props.params)
                }
            },
            { deep: true, immediate: true }
        )

        /**
         * 刷新数据
         * @param _params 
         */
        const reload = (_params?: Record<string, any>) => {
            handleSearch({
                ..._params,
                pageSize: 12,
                pageIndex: 0
            })
        }

        /**
         * 导出方法
         */
        expose({ reload })

        return () => props.type !== 'SCROLL' ? 
            <JTable 
                {...props} 
                pageIndex={pageIndex.value} 
                dataSource={_dataSource.value}
                total={total.value}
                pageSize={pageSize.value}
                loading={loading.value}
                onSelectCancel={() => {
                    emit('cancelSelect')
                }}
                onPageChange={(page, size) => {
                    handleSearch({
                        ...props.params,
                        pageSize: size,
                        pageIndex: pageSize.value === size ? (page ? page - 1 : 0) : 0
                    })
                }}
            > 
                {{...slots}}
            </JTable>: 
            <ScrollTable 
                total={total.value}
                loading={loading.value}
                dataSource={_dataSource.value}
            >
                {{...slots}}
            </ScrollTable>
        
    }
})

export default JProTable
