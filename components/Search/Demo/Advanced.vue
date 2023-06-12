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
                title: 'ID',
                dataIndex: 'id',
                search: {
                    type: 'string',
                    defaultTermType: 'eq',
                },
            },
            {
                title: '名称',
                dataIndex: 'name',
                search: {
                    type: 'string',
                    first: true,
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
                title: '时间',
                dataIndex: 'time1',
                search: {
                    type: 'date',
                },
            },
            {
                title: '时间2',
                dataIndex: 'time2',
                search: {
                    type: 'date',
                },
            },
            {
                title: '时间3',
                dataIndex: 'time3',
                search: {
                    type: 'date',
                },
            },
            {
                title: '类型2',
                dataIndex: 'type2',
                search: {
                    type: 'select',
                    termOptions: ['eq', 'not'],
                    options: async () => {
                        console.log('刷新');
                        return [
                            { label: '类型1', value: 1 },
                            { label: '类型2', value: 2 },
                        ];
                    },
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
                    dataIndex: 'type2222',
                    search: {
                        type: 'select',
                        first: true,
                        rename: 'type111',
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
