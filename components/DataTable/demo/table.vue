<docs>

---
order: 4
title: 基础
---

</docs>
<template>
    <div>
        <j-data-table
            :columns="columns"
            :serial="true"
            :dataSource="newSource"
            ref="tableRef"
            itemKey="name"
        >
            <template #slot1="scope">
                <div>支持通过实体{{ scope.data.index }}</div>
            </template>
            <template #slot4>
                <a-tag color="pink">pink</a-tag>
                <a-tag color="red">red</a-tag>
            </template>
            <template #config="{ data }">
                {{ data }}
            </template>
        </j-data-table>
        <j-button @click="save">保存</j-button>
        <j-button @click="addItem">新增</j-button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const tableRef = ref();
const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: 100,
        type: 'text',
        form: {
            required: true,
            rules: [
                {
                    required: true,
                    message: '请输入名称',
                },
            ],
        },
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: '100',
        type: 'number',
        form: {
            required: true,
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
        width: '100',
        type: 'TypeSelect',
    },
    {
        title: '其他配置',
        dataIndex: 'config',
        width: '100',
        type: 'config',
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: '100',
        slot: 'slot4',
    },
]);
const newSource = ref([
    //初始数据
    {
        name: '11',
        id: 123,
        age: 12,
        width: 'int',
        config: [{ name: 1, age: 18, width: 150, config: null }],
    },
    { name: 2, id: 1232, age: 21, width: 'double', config: null },
    { name: 3, id: 1233, age: 21, width: 'date', config: null },
    { name: 4, id: 1234, age: 21, width: 'array', config: null },
]);

const save = async () => {
    const data = await tableRef.value?.getData();
    console.log(data);
};

const addItem = () => {
    newSource.value.push({
        name: undefined,
        id: '123123',
        age: undefined,
        width: undefined,
        config: undefined,
    });
};
</script>
