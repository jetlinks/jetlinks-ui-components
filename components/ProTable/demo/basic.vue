<docs>
---
order: 0
title: 基本
---

简单的表格

</docs>
<template>
    <j-pro-table :columns="columns" :data-source="data" :noPagination="true" :gridColumn="3">
        <template #headerTitle
            ><j-button type="primary">新增</j-button></template
        >
        <template #rightExtraRender><j-button>批量操作</j-button></template>
        <template #card="slotProps">
            <div
                style="width: 100%; border: 1px solid lightgray; padding: 20px"
            >
                <h4>名称： {{ slotProps?.name }}</h4>
                <p>年龄： {{ slotProps?.age }}</p>
            </div>
        </template>
        <template #address="slotProps">
            <a>{{ slotProps?.address }}</a>
        </template>
    </j-pro-table>
</template>


<script lang="ts">
import { random } from 'lodash';
import { defineComponent } from 'vue';
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
        scopedSlots: true,
    },
    {
        title: '状态',
        dataIndex: 'status.text',
        key: 'status.text'
    },
];

const data = Array(10)
    .fill(1)
    .map((item, index) => {
        return {
            key: index + item,
            name: 'John Brown',
            age: random(100),
            address: 'New York No. 1 Lake Park',
            status: {
                text: "123"
            }
        };
    });

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});
</script>



