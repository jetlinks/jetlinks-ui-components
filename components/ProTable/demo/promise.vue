<docs>
---
order: 1
title: 远程加载数据
---

这个例子通过简单的 promise 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。

</docs>
<template>
    <j-pro-table
        :columns="columns"
        :request="query"
        :params="{}"
        :defaultParams="{ sorts: [{ name: 'createTime', order: 'desc' }] }"
        ref="instanceRef"
    >
        <template #headerTitle
            ><j-button type="primary" @click="refresh"
                >刷新页面</j-button
            ></template
        >
        <template #card="slotProps">
            <div
                style="width: 100%; border: 1px solid lightgray; padding: 20px"
            >
                <p>年龄： {{ slotProps?.age }}</p>
                <p>{{ slotProps?.address }}</p>
            </div>
        </template>
    </j-pro-table>
</template>

<script lang="ts">
import { random } from 'lodash';
import { defineComponent, ref } from 'vue';

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
];

const instanceRef = ref<Record<string, any>>({});

const query = (params: Record<string, any>) =>
    new Promise((resolve) => {
        const data = Array(100)
            .fill(1)
            .map((item, index) => {
                return {
                    key: index + item,
                    name: 'John Brown',
                    age: random(100),
                    address: 'New York No. 1 Lake Park',
                };
            });
        const _from = params.pageIndex * params.pageSize;
        const _to = (params.pageIndex + 1) * params.pageSize;
        setTimeout(() => {
            resolve({
                result: {
                    data: data.slice(_from, _to),
                    pageIndex: params.pageIndex || 0,
                    pageSize: params.pageSize || 12,
                    total: data.length,
                },
                status: 200,
            });
        }, 2000);
    });

const refresh = () => {
    instanceRef.value?.reload();
};

export default defineComponent({
    setup() {
        return {
            query,
            columns,
            refresh,
            instanceRef,
        };
    },
});
</script>
