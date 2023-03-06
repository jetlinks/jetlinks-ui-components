<docs>
---
order: 99
title: template 风格的 API
---

## zh-CN

使用 template 风格的 API。

> 不推荐使用，会有一定的性能损耗。

> 这个只是一个描述 `columns` 的语法糖，所以你不能用其他组件去包裹 `Column` 和 `ColumnGroup`。

</docs>

<template>
    <j-table :data-source="data">
        <j-table-column-group>
            <template #title><span style="color: #1890ff">Name</span></template>
            <j-table-column key="firstName" data-index="firstName">
                <template #title
                    ><span style="color: #1890ff">First Name</span></template
                >
            </j-table-column>
            <j-table-column
                key="lastName"
                title="Last Name"
                data-index="lastName"
            />
        </j-table-column-group>
        <j-table-column key="age" title="Age" data-index="age" />
        <j-table-column key="address" title="Address" data-index="address" />
        <j-table-column key="tags" title="Tags" data-index="tags">
            <template #default="{ text: tags }">
                <span>
                    <j-tag v-for="tag in tags" :key="tag" color="blue">{{
                        tag
                    }}</j-tag>
                </span>
            </template>
        </j-table-column>
        <j-table-column key="action" title="Action">
            <template #default="{ record }">
                <span>
                    <a>Action 一 {{ record.firstName }}</a>
                    <j-divider type="vertical" />
                    <a>Delete</a>
                </span>
            </template>
        </j-table-column>
    </j-table>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

export default defineComponent({
    setup() {
        return {
            data,
        };
    },
});
</script>
