<docs>
---
order: 1
title: AdvancedSearch组件
---

AdvancedSearch组件组件基本使用

</docs>

<template>
    <j-advanced-search
        :columns="columns"
        @search="onSearch"
        target="test"
        routerMode="history"
        :deleteRequest="deleteRequest"
        style="padding: 0"
    />
    <j-button @click="addColumns">改变搜索项</j-button>
    <div>
        查询结果:
        <br />
        {{ paramsStr }}
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'AdvancedSearch',
    setup() {
        const paramsStr = ref();
        const columns = ref([
            {
                title: '名称',
                dataIndex: 'name',
                search: {
                    type: 'string',
                    componentProps: {
                        placeholder: '请输入名称',
                    },
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
                    rename: 'typeTest',
                    first: true,
                    defaultOnceValue: [1],
                    componentProps: {
                        mode: 'multiple',
                    },
                    options: [
                        { label: '类型1', value: 1 },
                        { label: '类型2', value: 2 },
                    ],
                },
            },
            {
                title: '类型2',
                dataIndex: 'type2',
                search: {
                    type: 'select',
                    options: [
                        { label: '类型1', value: 1 },
                        { label: '类型2', value: 2 },
                    ],
                },
            },
        ]);

        const onSearch = (e) => {
            paramsStr.value = JSON.stringify(e);
        };

        const deleteRequest = async (id) => {
            console.log(id);
        };

        const addColumns = () => {
            columns.value = [
                {
                    title: '名称1',
                    dataIndex: 'name',
                    search: {
                        type: 'string',
                        defaultValue: '123',
                        componentProps: {
                            placeholder: '请输入名称',
                        },
                    },
                },
                {
                    title: '类型1',
                    dataIndex: 'type',
                    search: {
                        type: 'select',
                        rename: 'typeTest',
                        first: true,
                        defaultOnceValue: [2],
                        componentProps: {
                            mode: 'multiple',
                        },
                        options: [
                            { label: '类型1', value: 1 },
                            { label: '类型2', value: 2 },
                        ],
                    },
                },
                {
                    title: '年龄1',
                    dataIndex: 'age',
                    search: {
                        type: 'number',
                        componentProps: {
                            placeholder: '请输入真实年龄',
                        },
                    },
                },
            ];
        };

        return {
            columns,
            paramsStr,
            onSearch,
            deleteRequest,
            addColumns,
        };
    },
};
</script>

<style scoped></style>
