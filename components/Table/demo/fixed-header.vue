<docs>
---
order: 12
title: 固定表头
---

## zh-CN

方便一页内展示大量数据。
> 需要指定 column 的 `width` 属性，否则列头和内容可能不对齐。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。

</docs>

<template>
    <j-table
        :columns="columns"
        :data-source="data"
        :pagination="{ pageSize: 50 }"
        :scroll="{ y: 240 }"
    />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        width: 150,
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [...Array(100)].map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
}));

export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});
</script>
