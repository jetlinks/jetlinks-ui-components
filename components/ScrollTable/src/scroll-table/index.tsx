import type { TableProps } from 'ant-design-vue/lib/table';
import { defineComponent, ref, watch } from 'vue';
import Scroll from './scroll';
import { Empty, Spin } from '../../../components';

type RequestData =
    | {
          code: string;
          result: {
              data: Record<string, any>[] | undefined;
              pageIndex: number;
              pageSize: number;
              total: number;
          };
          status: number;
      }
    | Record<string, any>;

export interface JProTableProps extends TableProps {
    request?: (params?: Record<string, any>) => Promise<Partial<RequestData>>;
    cardBodyClass?: string;
    params?: Record<string, any>;
    dataSource?: Record<string, any>[];
    defaultParams?: Record<string, any>;
    bodyStyle?: Record<string, any>;
    windowHeight: number;
}

const tableProps = () => {
    return {
        loading: {
            type: Boolean,
            default: undefined,
        },
        request: {
            type: Function,
            default: undefined,
        },
        bodyStyle: {
            type: Object,
            default: {},
        },
        params: {
            type: Object,
            default: () => {},
        },
        dataSource: {
            type: Array,
            default: () => [],
        },
        defaultParams: {
            type: Object,
            default: () => {
                return {
                    pageIndex: 0,
                    pageSize: 12,
                };
            },
        },
    };
};

const JScrollTable = defineComponent<JProTableProps>({
    name: 'JScrollTable',
    slots: ['prev'],
    props: tableProps() as any,
    setup(props: JProTableProps, { slots, emit, expose }) {
        const _dataSource = ref<Record<string, any>[]>([]);
        const pageIndex = ref<number>(0);
        const pageSize = ref<number>(6);
        const total = ref<number>(0);
        const _loading = ref<boolean>(true);

        const handleSearch = async (
            _params?: Record<string, any>,
            isRest?: boolean,
        ) => {
            _loading.value =
                props.loading !== undefined ? (props.loading as boolean) : true;
            if (!props.request) {
                _dataSource.value = props?.dataSource || [];
            } else {
                // 请求数据
                const resp = await props.request({
                    pageIndex: 0,
                    pageSize: 12,
                    ...props.defaultParams,
                    ..._params,
                    terms: [
                        ...(props.defaultParams?.terms || []),
                        ...(_params?.terms || []),
                    ],
                });
                if (resp.status === 200) {
                    const obj = Array.isArray(resp.result)
                        ? resp.result[0]
                        : resp.result;
                    if (obj) {
                        if (isRest) {
                            _dataSource.value = [...obj.data];
                            pageIndex.value = resp.result?.pageIndex || 0;
                            pageSize.value = resp.result?.pageSize || 6;
                            total.value = resp.result?.total || 0;
                        } else {
                            _dataSource.value = [
                                ..._dataSource.value,
                                ...obj.data,
                            ];
                            pageIndex.value = resp.result?.pageIndex || 0;
                            pageSize.value = resp.result?.pageSize || 6;
                            total.value = resp.result?.total || 0;
                        }
                    }
                } else {
                    _dataSource.value = [];
                }
            }
            _loading.value =
                props.loading !== undefined
                    ? (props.loading as boolean)
                    : false;
        };

        watch(
            () => props.params,
            (newValue) => {
                handleSearch(newValue, true);
            },
            { deep: true, immediate: true },
        );

        watch(
            () => props.dataSource,
            () => {
                if (props.dataSource && !props.request) {
                    handleSearch(props.params);
                }
            },
            { deep: true, immediate: true },
        );

        const onReachBottom = (scrollTop: number) => {
            if (total.value > _dataSource.value.length) {
                pageIndex.value += 1;
                handleSearch({ ...props.params, pageIndex: pageIndex.value });
            }
        };

        /**
         * 刷新数据
         * @param _params
         */
        const reload = (_params?: Record<string, any>) => {
            handleSearch(
                {
                    ..._params,
                    pageSize: 12,
                    pageIndex: 0,
                },
                true,
            );
        };

        return () => (
            <Spin spinning={_loading.value}>
                <Scroll
                    {...props}
                    total={total.value}
                    dataSource={_dataSource.value}
                    onReachBottom={onReachBottom}
                >
                    {{ ...slots }}
                </Scroll>
            </Spin>
        );
    },
});

export default JScrollTable;
