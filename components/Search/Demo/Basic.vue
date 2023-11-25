<docs>
---
order: 0
title: Search组件
---

Search组件基本使用

</docs>

<template>
    <j-radio-group v-model:value="value">
        <j-radio-button value="object">object</j-radio-button>
        <j-radio-button value="terms">terms</j-radio-button>
    </j-radio-group>
    <j-search :columns="columns" @search="onSearch" :type="value" />
    <div>
        查询结果:
        <br />
        {{ paramsStr }}
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    name: 'Basic',
    setup() {
        const paramsStr = ref();
        const value = ref('object');
        const columns = [
            {
                title: '名称名称名称1',
                dataIndex: 'name',
                search: {
                    type: 'string',
                    componentProps: {
                        placeholder: '请输入名称',
                    },
                    defaultValue: '111111111',
                },
            },
            {
                title: '年龄',
                dataIndex: 'age',
                search: {
                    type: 'number',
                    componentProps: {
                        placeholder: '请输入真实年龄',
                    },
                },
            },
            {
                title: '类型',
                dataIndex: 'type',
                search: {
                    type: 'select',
                    options: [
                        { label: '类型1', value: 1 },
                        { label: '类型2', value: 2 },
                    ],
                    componentProps: {
                        placeholder: '请选择类型',
                    },
                },
            },
            {
                title: '测试地址长度',
                dataIndex: 'address',
                search: {
                    type: 'string',
                },
            },
            {
                title: '时间',
                dataIndex: 'treeSelect',
                search: {
                    type: 'treeSelect',
                    componentProps: {
                        treeNodeFilterProp: 'title',
                        fieldNames: { label: 'title' },
                        filterTreeNode: (v, node) => {
                            console.log(v, node);
                            return true;
                        },
                    },
                    options: [
                        { title: '1', value: 1 },
                        { title: '12', value: 12 },
                        { title: '13', value: 13 },
                        { title: '14', value: 14 },
                        { title: '15', value: 15 },
                    ],
                },
            },
        ];

        const onSearch = (e) => {
            paramsStr.value = JSON.stringify(e);
        };

        return {
            columns,
            paramsStr,
            onSearch,
            value,
        };
    },
};
</script>

<style scoped></style>
