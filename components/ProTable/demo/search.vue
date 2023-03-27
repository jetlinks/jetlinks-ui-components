<docs>
---
order: 4
title: 结合Search
---

结合search组件进行数据查询

</docs>
<template>
    <j-advanced-search
        :columns="columns"
        target="search-table"
        @search="handleParams"
    />
    <j-pro-table
        :columns="columns"
        :request="query"
        :params="params"
        :defaultParams="{ sorts: [{ name: 'createTime', order: 'desc' }] }"
        ref="instanceRef"
        :pagination="{
            pageSizeOptions: ['10', '20'],
        }"
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

<script lang="ts" setup>
import { random } from 'lodash';
import { defineComponent, ref } from 'vue';

const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        search: {
            type: 'string',
        },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        search: {
            type: 'number',
        },
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address',
    },
];

const instanceRef = ref<Record<string, any>>({});
const params = ref<Record<string, any>>({});

const query = (_params: Record<string, any>) =>
    new Promise((resolve) => {
        const data = Array(100000)
            .fill(1)
            .map((item, index) => {
                return {
                    key: index + item,
                    name: 'John Brown',
                    age: random(100),
                    address: 'New York No. 1 Lake Park',
                };
            });
        const _from = _params.pageIndex * _params.pageSize;
        const _to = (_params.pageIndex + 1) * _params.pageSize;
        setTimeout(() => {
            resolve({
                result: {
                    data: data.slice(_from, _to),
                    pageIndex: _params.pageIndex || 0,
                    pageSize: _params.pageSize || 10,
                    total: data.length,
                },
                status: 200,
            });
        }, 500);
    });

const refresh = () => {
    instanceRef.value?.reload();
};

const handleParams = (p: Record<string, any>) => {
    params.value = p;
};
</script>
