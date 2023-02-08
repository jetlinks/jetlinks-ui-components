<template>
    <ProTable
        v-if="props.type !== 'scroll'"
        v-bind="props"
        :dataSource="_dataSource"
        :loading="loading"
        :total="total"
    />
    <ScrollTable
        v-else
        :total="total"
        :dataSource="_dataSource"
        :loading="loading"
        @onReachBottom="onReachBottom"
    />
</template>

<script lang="ts" setup>
import ProTable from './pro-table/index.vue';
import ScrollTable from './scroll-table/index.vue';
import { CommonProps, RequestData } from './proTableTypes';
import { ref, watch, watchEffect } from 'vue';
import { debounce } from 'lodash-es';

interface JTableProps extends CommonProps {
    request?: (params?: Record<string, any>) => Promise<Partial<RequestData>>;
    params?: Record<string, any>;
    defaultParams?: Record<string, any>;
}
// props
// const props = defaultProps;
const props = withDefaults(defineProps<JTableProps>(), {
    cardBodyClass: '',
    request: undefined,
    params: undefined,
});
// emit
const emit = defineEmits<{
    (e: 'cancelSelect'): void; // 取消选择
}>();

/**
 * 变量
 */
const _dataSource = ref<Record<string, any>[]>(props.dataSource || []); // 渲染的数据
const loading = ref<boolean>(false); // loading
const pageIndex = ref<number>(0); // 页码
const pageSize = ref<number>(6); // 分页数量
const total = ref<number>(0); // 总数

/**
 * 方法
 */
// 请求数据
const handleSearch = async (_params?: Record<string, any>) => {
    loading.value = true;
    if (props.request) {
        const resp: Record<string, any> = await props?.request({
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
            if (props.type === 'PAGE') {
                // 判断如果是最后一页且最后一页为空，就跳转到前一页
                if (
                    resp.result.total &&
                    resp.result.pageSize &&
                    resp.result.pageIndex &&
                    resp.result?.data?.length === 0
                ) {
                    handleSearch({
                        ..._params,
                        pageSize: pageSize.value,
                        pageIndex:
                            pageIndex.value > 0 ? pageIndex.value - 1 : 0,
                    });
                } else {
                    _dataSource.value = resp.result?.data || [];
                    pageIndex.value = resp.result?.pageIndex || 0;
                    pageSize.value = resp.result?.pageSize || 6;
                    total.value = resp.result?.total || 0;
                }
            } else {
                _dataSource.value = (resp?.result || []) as Record<
                    string,
                    any
                >[];
            }
        } else {
            _dataSource.value = [];
        }
    } else {
        _dataSource.value = props?.dataSource || [];
    }
    loading.value = false;
};

// const handleSearch = async (searchParams: any, isSearch?: boolean) => {
//     spinning.value = true
//     const param = {...searchParams}
//     if(props.request){
//         const resp = await props.request(param, props.defaultParams)
//         if(resp.status === 200){
//         const obj = Array.isArray(resp.result) ? resp.result[0] : resp.result
//         if(obj) {
//             Object.keys(obj).forEach(key => {
//                 dataSource[key] = obj[key]
//             })
//             if(isSearch) {
//                 list.value = [...obj.data]
//             } else {
//                 list.value = [...list.value, ...obj.data]
//             }
//         }
//         emit('done', list.value)
//         }
//     }
//     spinning.value = false
// }

// 分页改变
const pageChange = (page: number, size: number) => {
    handleSearch({
        ...props.params,
        pageSize: size,
        pageIndex: pageSize.value === size ? (page ? page - 1 : 0) : 0,
    });
};

const handleAlertClose = () => {
    emit('cancelSelect');
};

//刷新
const reload = () => {
    handleSearch({
        // ..._params,
        pageSize: 12,
        pageIndex: 0,
    });
};

const onReachBottom = debounce(() => {
    //   if (dataSource.total > list.value.length) {
    //     params.pageIndex += 1
    //     handleSearch(params)
    //   }
}, 1000);

watch(
    () => props.params,
    (newVal) => {
        handleSearch(newVal);
    },
    { immediate: true, deep: true },
);

// watch(
//     () => props.dataSource,
//     () => {
//         if (props.dataSource && !props.request) {
//             handleSearch(props.params);
//         }
//     },
//     { deep: true, immediate: true },
// );

defineExpose({ reload });
</script>
