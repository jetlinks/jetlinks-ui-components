import {
    Table,
    Empty,
    Pagination,
    AIcon,
    Button,
    Alert,
    Spin,
    RadioGroup,
    RadioButton,
} from '../../../components';
import type { RadioChangeEvent } from '../../../components';
import type { TableProps } from 'ant-design-vue/lib/table';
import {
    defineComponent,
    onMounted,
    onUnmounted,
    PropType,
    ref,
    watch,
} from 'vue';
import {
    JColumnProps,
    ModelEnum,
    TypeEnum,
    RequestData,
} from '../proTableTypes';
import { get, debounce } from 'lodash-es';
import { tableProps as _tableProps } from 'ant-design-vue/lib/table';

export interface JTableProps extends TableProps {
    request?: (params?: Record<string, any>) => Promise<Partial<RequestData>>;
    cardBodyClass?: string;
    columns: JColumnProps[];
    model?: keyof typeof ModelEnum | undefined; // 显示table还是card
    noPagination?: boolean;
    rowSelection?: TableProps['rowSelection'];
    dataSource?: Record<string, any>[];
    params?: Record<string, any>;
    gridColumn?: number;
    gridColumns?: number[];
    alertRender?: boolean;
    type?: keyof typeof TypeEnum;
    defaultParams?: Record<string, any>;
    bodyStyle?: Record<string, any>;
    pageIndex: number;
    pageSize: number;
    total: number;
    column: number;
}

const tableProps = () => {
    return {
        ..._tableProps(),
        loading: {
            type: Boolean,
            default: undefined,
        },
        request: {
            type: Function,
            default: undefined,
        },
        cardBodyClass: {
            type: String,
            default: '',
        },
        bodyStyle: {
            type: Object,
            default: {},
        },
        columns: {
            type: Array,
            default: () => [],
        },
        model: {
            type: [String, undefined],
            default: undefined,
        },
        noPagination: {
            type: Boolean,
            default: false,
        },
        rowSelection: {
            type: Object as PropType<TableProps['rowSelection']>,
            default: () => undefined,
        },
        dataSource: {
            type: Array,
            default: () => [],
        },
        gridColumns: {
            type: Array as PropType<number[]>,
            default: () => [],
        },
        gridColumn: {
            type: Number,
            default: 4,
        },
        alertRender: {
            type: Boolean,
            default: true,
        },
        params: {
            type: Object,
            default: () => {},
        },
        type: {
            type: String,
            default: 'PAGE',
        },
        scroll: {
            type: Object,
            default: () => {
                x: 1366;
            },
        },
        defaultParams: {
            type: Object,
            default: () => {},
        },
        rowKey: {
            type: [String, Function],
            default: 'id',
        },
        pagination: {
            type: Object, // Boolean,
            default: () => {
                return {
                    showSizeChanger: true,
                    showQuickJumper: false,
                    size: 'size',
                    pageSizeOptions: ['12', '24', '48', '96'],
                };
            },
        },
    };
};

const ProTable = defineComponent<JTableProps>({
    name: 'ProTable',
    slots: [
        'headerTitle', // 顶部左边插槽
        'card', // 卡片内容
        'rightExtraRender',
        'paginationRender', // 分页
    ],
    props: tableProps() as any,
    setup(props: JTableProps, { slots, expose }) {
        const _model = ref<keyof typeof ModelEnum>(
            props.model ? props.model : ModelEnum.CARD,
        ); // 模式切换

        const _dataSource = ref<Record<string, any>[]>([]);
        const pageIndex = ref<number>(0);
        const pageSize = ref<number>(12);
        const total = ref<number>(0);
        const _loading = ref<boolean>(false);
        const column = ref<number>(props.gridColumn || 4);

        /**
         * 监听宽度，计算显示卡片个数
         */
        const windowChange = () => {
            if (window.innerWidth <= 1440) {
                const _column =
                    props.gridColumn && props.gridColumn < 2
                        ? props.gridColumn
                        : 2;
                column.value = props.gridColumns?.[0]
                    ? props.gridColumns[0]
                    : _column;
            } else if (window.innerWidth > 1440 && window.innerWidth <= 1600) {
                const _column =
                    props.gridColumn && props.gridColumn < 3
                        ? props.gridColumn
                        : 3;
                column.value = props.gridColumns?.[1]
                    ? props.gridColumns[1]
                    : _column;
            } else if (window.innerWidth > 1600) {
                const _column =
                    props.gridColumn && props.gridColumn < 4
                        ? props.gridColumn
                        : 4;
                column.value = props.gridColumns?.[2]
                    ? props.gridColumns[2]
                    : _column;
            }
        };

        const handleSearch = async (_params?: Record<string, any>) => {
            _loading.value =
                props.loading !== undefined ? (props.loading as boolean) : true;
            if (props.request) {
                const resp: any = await props
                    .request({
                        pageIndex: 0,
                        pageSize: 12,
                        ...props.defaultParams,
                        ..._params,
                        terms: [
                            ...(props.defaultParams?.terms || []),
                            ...(_params?.terms || []),
                        ],
                    })
                    .catch(() => {
                        _loading.value =
                            props.loading !== undefined
                                ? (props.loading as boolean)
                                : false;
                    });
                if (resp.status === 200) {
                    if (props.type === 'PAGE') {
                        // 判断如果是最后一页且最后一页为空，就跳转到前一页
                        if (
                            resp?.result?.total &&
                            resp?.result?.pageSize &&
                            resp?.result?.pageIndex &&
                            resp?.result?.data?.length === 0
                        ) {
                            pageIndex.value = pageIndex.value > 0
                                ? pageIndex.value - 1
                                : 0
                            console.log(pageIndex.value)
                            handleSearch({
                                ..._params,
                                pageSize: pageSize.value,
                                pageIndex: pageIndex.value
                            });
                        } else {
                            _dataSource.value = resp?.result?.data || [];
                            pageIndex.value = resp?.result?.pageIndex || 0;
                            pageSize.value = resp?.result?.pageSize || 12;
                            total.value = resp?.result?.total || 0;
                        }
                    } else {
                        _dataSource.value = resp?.result || [];
                    }
                } else {
                    _dataSource.value = [];
                }
            } else {
                _dataSource.value = props?.dataSource || [];
            }
            _loading.value =
                props.loading !== undefined
                    ? (props.loading as boolean)
                    : false;
        };

        const _debounceFn = debounce(handleSearch, 300);

        watch(
            () => props.params,
            (newValue) => {
                _debounceFn(newValue || {});
            },
            { deep: true, immediate: true },
        );

        watch(
            () => props.dataSource,
            (newVal) => {
                if (newVal && !props.request) {
                    handleSearch(props.params);
                }
            },
            { deep: true, immediate: true },
        );

        /**
         * 刷新数据
         * @param _params
         */
        const reload = (_params?: Record<string, any>) => {
            handleSearch({
                ...props.params,
                ..._params,
                pageSize: pageSize.value || 12, // 刷新页面不改变分页情况
                pageIndex: pageIndex.value || 0,
            });
        };

        onMounted(() => {
            windowChange(); // 初始化
            window.onresize = () => {
                windowChange();
            };
        });

        onUnmounted(() => {
            window.onresize = null;
        });

        /**
         * 导出方法
         */
        expose({ reload, _dataSource });

        return () => (
            <div class="jtable-body-spin" style={{ ...props.bodyStyle }}>
                <Spin spinning={_loading.value}>
                    <div class={'jtable-body'}>
                        <div class={'jtable-body-header'}>
                            <div class={'jtable-body-header-left'}>
                                {/* 顶部左边插槽 */}
                                {slots.headerTitle && slots.headerTitle()}
                            </div>
                            <div class={'jtable-body-header-right'}>
                                {/* 顶部右边插槽 */}
                                {slots.rightExtraRender &&
                                    slots.rightExtraRender()}
                                {!props.model && (
                                    <div
                                        class={
                                            'jtable-body-header-right-button'
                                        }
                                    >
                                        <RadioGroup
                                            class="jtable-body-header-right-button"
                                            value={_model.value}
                                            onChange={(e: RadioChangeEvent) => {
                                                _model.value = e.target.value;
                                            }}
                                        >
                                            <RadioButton
                                                value={ModelEnum.TABLE}
                                            >
                                                <AIcon
                                                    class={'right-button-icon'}
                                                    type="UnorderedListOutlined"
                                                />
                                            </RadioButton>
                                            <RadioButton value={ModelEnum.CARD}>
                                                <AIcon
                                                    class={'right-button-icon'}
                                                    type="AppstoreOutlined"
                                                />
                                            </RadioButton>
                                        </RadioGroup>
                                    </div>
                                )}
                            </div>
                        </div>
                        {/* content */}
                        <div class={'jtable-content'}>
                            {props.alertRender &&
                            props?.rowSelection &&
                            props?.rowSelection?.selectedRowKeys &&
                            props.rowSelection.selectedRowKeys?.length ? (
                                <div class={'jtable-alert'}>
                                    <Alert
                                        message={
                                            '已选择' +
                                            props?.rowSelection?.selectedRowKeys
                                                ?.length +
                                            '项'
                                        }
                                        type="info"
                                        onClose={() => {
                                            if (props.rowSelection?.onSelectNone) {
                                                // 取消选择清空被选数据
                                                props.rowSelection.onSelectNone();
                                            }
                                        }}
                                        closeText={
                                            <Button type="link">
                                                取消选择
                                            </Button>
                                        }
                                    />
                                </div>
                            ) : null}
                            {_model.value === ModelEnum.CARD ? (
                                <div class={'jtable-card'}>
                                    {_dataSource.value.length ? (
                                        <div
                                            class={'jtable-card-items'}
                                            style={{
                                                gridTemplateColumns: `repeat(${column.value}, 1fr)`,
                                            }}
                                        >
                                            {_dataSource.value.map((item) =>
                                                slots.card ? (
                                                    <div
                                                        class={[
                                                            'jtable-card-item',
                                                            props.cardBodyClass,
                                                        ]}
                                                    >
                                                        {slots.card(item)}
                                                    </div>
                                                ) : null,
                                            )}
                                        </div>
                                    ) : (
                                        <div class="j-table-empty">
                                            <Empty />
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <Table
                                        {...props}
                                        dataSource={_dataSource.value}
                                        columns={props.columns.filter(
                                            (i) => !i?.hideInTable,
                                        )}
                                        pagination={false}
                                        rowSelection={props.rowSelection}
                                        scroll={props.scroll}
                                        v-slots={{
                                            headerCell: (
                                                dt: Record<string, any>,
                                            ) => {
                                                const { column, title } = dt;
                                                if (column?.headerCell) {
                                                    return slots?.[
                                                        column?.headerCell
                                                    ]!(column.title);
                                                } else {
                                                    return title || '';
                                                }
                                            },
                                            bodyCell: (
                                                dt: Record<string, any>,
                                            ) => {
                                                const { column, record } = dt;
                                                if (
                                                    (column?.key ||
                                                        column?.dataIndex) &&
                                                    column?.scopedSlots &&
                                                    (slots?.[
                                                        column?.dataIndex
                                                    ] ||
                                                        slots?.[column?.key])
                                                ) {
                                                    const _key =
                                                        column?.key ||
                                                        column?.dataIndex;
                                                    return slots?.[_key]!(
                                                        record,
                                                    );
                                                } else {
                                                    const _value = get(
                                                        record,
                                                        column?.dataIndex,
                                                    );
                                                    // 获取数据
                                                    return _value;
                                                }
                                            },
                                            emptyText: () => <Empty />,
                                        }}
                                    />
                                </div>
                            )}
                        </div>
                        {/* 分页 */}
                        {!!_dataSource.value.length &&
                            !props.noPagination &&
                            props.type === 'PAGE' && (
                                <div class={'jtable-pagination'}>
                                    {slots?.paginationRender ? (
                                        slots.paginationRender()
                                    ) : (
                                        <Pagination
                                            {...props.pagination}
                                            total={total.value}
                                            current={pageIndex.value + 1}
                                            pageSize={pageSize.value}
                                            showTotal={(num) => {
                                                const minSize =
                                                    pageIndex.value *
                                                        pageSize.value +
                                                    1;
                                                const MaxSize =
                                                    (pageIndex.value + 1) *
                                                    pageSize.value;
                                                return `第 ${minSize} - ${
                                                    MaxSize > num
                                                        ? num
                                                        : MaxSize
                                                } 条/总共 ${num} 条`;
                                            }}
                                            onChange={(page, size) => {
                                                handleSearch({
                                                    ...props.params,
                                                    pageSize: size,
                                                    pageIndex:
                                                        pageSize.value === size
                                                            ? page
                                                                ? page - 1
                                                                : 0
                                                            : 0,
                                                });
                                            }}
                                        />
                                    )}
                                </div>
                            )}
                    </div>
                </Spin>
            </div>
        );
    },
});

export default ProTable;
