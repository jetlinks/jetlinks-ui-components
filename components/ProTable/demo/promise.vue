<docs>
---
order: 1
title: 远程加载数据
---

这个例子通过简单的 promise 读取方式，演示了如何从服务端读取并展现数据，具有筛选、排序等功能以及页面 loading 效果。开发者可以自行接入其他数据处理方式。

</docs>
<template>
    <!-- <j-button @click="onChange">改变params</j-button> -->
    <div style="height: 600px;">
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
                    style="
                        width: 100%;
                        border: 1px solid lightgray;
                        padding: 20px;
                    "
                >
                    <p>年龄： {{ slotProps?.age }}</p>
                    <p>{{ slotProps?.address }}</p>
                </div>
            </template>
        </j-pro-table>
    </div>
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

// const onChange = () => {
//     let index = 0
//     setInterval(() => {
//         index += 1
//         params.value = {
//             pageIndex: index,
//             pageSize: 10
//         }
//     }, 200)
// }

export default defineComponent({
    setup() {
        return {
            query,
            columns,
            refresh,
            instanceRef,
            params,
            // onChange
        };
    },
});
</script>
