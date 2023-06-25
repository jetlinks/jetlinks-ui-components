<docs>

---
order: 5
title: 基础
---

</docs>
<template>
    <div>
        <j-data-table
            :columns="columns"
            :serial="true"
            :dataSource="newSource"
            border
        >
            <template #name="scope">
                <div>支持通过实体{{ scope.data.index }}</div>
            </template>
            <template #action>
                <a-tag color="pink">pink</a-tag>
                <a-tag color="red">red</a-tag>
            </template>
            <template #config="{ data }">
                {{ data }}
            </template>
        </j-data-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { DataTableBoolean } from 'jetlinks-ui-components';

const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: 200,
        type: 'text',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 200,
        type: 'number',
        form: {
            rules: [
                {
                    validator(_, value) {
                        if (!value) {
                            return Promise.reject('请输入年龄');
                        }
                        return Promise.resolve();
                    },
                },
            ],
        },
    },
    {
        title: 'width',
        dataIndex: 'width',
        width: 200,
        type: 'TypeSelect',
    },
    {
        title: '其他配置',
        dataIndex: 'config',
        type: 'config',
    },
    {
        title: '布尔值',
        dataIndex: 'boolean',
        type: 'components',
        components: {
            name: DataTableBoolean,
        },
        width: 150,
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 140,
    },
]);
const newSource = ref([
    //初始数据
    {
        id: '1111',
        name: 1,
        age: 18,
        width: 'int',
        config: null,
        boolean: false,
    },
    {
        id: '1112',
        name: 2,
        age: 19,
        width: 'double',
        config: null,
        boolean: false,
    },
    {
        id: '1113',
        name: 3,
        age: 20,
        width: 'date',
        config: null,
        boolean: false,
    },
    {
        id: '1114',
        name: 4,
        age: 21,
        width: 'array',
        config: null,
        boolean: false,
    },
]);
</script>
