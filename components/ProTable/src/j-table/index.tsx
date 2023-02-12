import { UnorderedListOutlined, AppstoreOutlined } from '@ant-design/icons-vue'
import styles from './index.module.less'
import { Pagination, Table, Empty, Spin, Alert } from 'ant-design-vue'
import type { TableProps } from 'ant-design-vue/es/table'
import { defineComponent, onMounted, onUnmounted, PropType, ref, watchEffect } from 'vue';
import { JColumnProps, ModelEnum, TypeEnum } from '../proTableTypes';

export interface JTableProps extends TableProps {
    cardBodyClass?: string;
    columns: JColumnProps[];
    model?: keyof typeof ModelEnum | undefined; // 显示table还是card
    noPagination?: boolean;
    rowSelection?: TableProps['rowSelection'];
    cardProps?: Record<string, any>;
    dataSource?: Record<string, any>[];
    gridColumn?: number;
    gridColumns?: number[];
    alertRender?: boolean;
    type?: keyof typeof TypeEnum;
    defaultParams?: Record<string, any>;
    bodyStyle?: Record<string, any>;
    pageIndex: number;
    pageSize: number;
    total: number;
    loading: boolean;
}

const tableProps = () => {
    return {
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
        pageIndex: {
            type: Number,
            default: 0
        },
        pageSize: {
            type: Number,
            default: 6
        },
        total: {
            type: Number,
            default: 0
        },
        loading: {
            type: Boolean,
            default: true
        }
    }
}

const JTable = defineComponent<JTableProps>({
    name: 'JTable',
    slots: [
        'headerTitle', // 顶部左边插槽
        'card', // 卡片内容
        'rightExtraRender',
        'paginationRender' // 分页
    ],
    emits: [
        'selectCancel', // 取消选择
        'pageChange'
    ],
    props: tableProps() as any,
    setup(props: JTableProps, { slots, emit }) {
        const _model = ref<keyof typeof ModelEnum>(props.model ? props.model : ModelEnum.CARD); // 模式切换
        const column = ref<number>(props.gridColumn || 4);

        /**
         * 监听宽度，计算显示卡片个数
         */
        const windowChange = () => {
            if (window.innerWidth <= 1440) {
                const _column = props.gridColumn && props.gridColumn < 2 ? props.gridColumn : 2;
                column.value = props.gridColumns ? props.gridColumns[0] : _column
            } else if (window.innerWidth > 1440 && window.innerWidth <= 1600) {
                const _column = props.gridColumn && props.gridColumn < 3 ? props.gridColumn : 3;
                column.value = props.gridColumns ? props.gridColumns[1] : _column
            } else if (window.innerWidth > 1600) {
                const _column = props.gridColumn && props.gridColumn < 4 ? props.gridColumn : 4;
                column.value = props.gridColumns ? props.gridColumns[2] : _column
            }
        }

        onMounted(() => {
            window.onresize = () => {
                windowChange()
            }
        })

        onUnmounted(() => {
            window.onresize = null
        })

        // watchEffect(() => {
        //     console.log(props)
        // })

        return () => <Spin spinning={props.loading}>
            <div class={styles["jtable-body"]} style={{ ...props.bodyStyle }}>
                <div class={styles["jtable-body-header"]}>
                    <div class={styles["jtable-body-header-left"]}>
                        {/* 顶部左边插槽 */}
                        {slots.headerTitle && slots.headerTitle()}
                    </div>
                    <div class={styles["jtable-body-header-right"]}>
                        {/* 顶部右边插槽 */}
                        {slots.rightExtraRender && slots.rightExtraRender()}
                        {
                            !props.model && <div class={styles["jtable-body-header-right-button"]}>
                                <div class={[styles["jtable-setting-item"], ModelEnum.CARD === _model.value ? styles['active'] : '']} onClick={() => {
                                    _model.value = ModelEnum.CARD
                                }}>
                                    <AppstoreOutlined />
                                </div>
                                <div class={[styles["jtable-setting-item"], ModelEnum.TABLE === _model.value ? styles['active'] : '']} onClick={() => {
                                    _model.value = ModelEnum.TABLE
                                }}>
                                    <UnorderedListOutlined />
                                </div>
                            </div>
                        }
                    </div>
                </div>
                {/* content */}
                <div class={styles['jtable-content']}>
                    {
                        props.alertRender && props?.rowSelection && props?.rowSelection?.selectedRowKeys && props.rowSelection.selectedRowKeys?.length ?
                            <div class={styles['jtable-alert']}>
                                <Alert
                                    message={'已选择' + props?.rowSelection?.selectedRowKeys?.length + '项'}
                                    type="info"
                                    onClose={() => {
                                        emit('selectCancel')
                                    }}
                                    closeText={<a-button type="link">取消选择</a-button>}
                                />
                            </div> : null
                    }
                    {
                        _model.value === ModelEnum.CARD ?
                            <div class={styles['jtable-card']}>
                                {
                                    props.dataSource.length ?
                                        <div
                                            class={styles['jtable-card-items']}
                                            style={{ gridTemplateColumns: `repeat(${column.value}, 1fr)` }}
                                        >
                                            {
                                                props.dataSource.map(item => slots.card ?
                                                    <div class={[styles['jtable-card-item'], props.cardBodyClass]}>
                                                        {slots.card(item)}
                                                    </div> : null
                                                )
                                            }
                                        </div> :
                                        <div><Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /></div>
                                }
                            </div> :
                            <div>
                                <Table
                                    dataSource={props.dataSource}
                                    columns={props.columns}
                                    pagination={false}
                                    rowKey="id"
                                    rowSelection={props.rowSelection}
                                    // scroll={{ x: 1366 }}
                                    v-slots={{
                                        bodyCell: (dt: Record<string, any>) => {
                                            const { column, record } = dt;
                                            if ((column?.key || column?.dataIndex) && column?.scopedSlots && (slots?.[column?.dataIndex] || slots?.[column?.key])) {
                                                const _key = column?.key || column?.dataIndex
                                                return slots?.[_key]!(record)
                                            } else {
                                                return record?.[column?.dataIndex] || ''
                                            }
                                        }
                                    }}
                                />
                            </div>
                    }
                </div>
                {/* 分页 */}
                {
                    (!!props.dataSource.length) && !props.noPagination && props.type === 'PAGE' &&
                    <div class={styles['jtable-pagination']}>
                        {
                            slots?.paginationRender ? 
                            slots.paginationRender() : 
                            <Pagination
                                size="small"
                                total={props.total}
                                showQuickJumper={false}
                                showSizeChanger={true}
                                current={props.pageIndex + 1}
                                pageSize={props.pageSize}
                                pageSizeOptions={['12', '24', '48', '60', '100']}
                                showTotal={(num) => {
                                    const minSize = props.pageIndex * props.pageSize + 1;
                                    const MaxSize = (props.pageIndex + 1) * props.pageSize;
                                    return `第 ${minSize} - ${MaxSize > num ? num : MaxSize} 条/总共 ${num} 条`;
                                }}
                                onChange={(page, size) => {
                                    emit('pageChange', page, size)
                                }}
                            />
                        }
                    </div>
                }
            </div>
        </Spin>
    }
})

export default JTable