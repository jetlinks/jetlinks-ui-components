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
        :historyRequest="historyList"
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
                },
            },
            {
                title: '名称',
                dataIndex: 'name',
                search: {
                    type: 'string',
                    first: true,
                },
            },
            {
                title: '接入方式',
                dataIndex: 'provider',
                search: {
                    type: 'select',
                    options: [
                        { label: 'GB/T28181', value: 'gb28181-2016' },
                        { label: '固定地址', value: 'fixed-media' },
                    ],
                },
            },
            {
                title: '通道数量',
                dataIndex: 'channelNumber',
                key: 'channelNumber',
                scopedSlots: true,
                width: 100,
            },
            {
                title: '厂商',
                dataIndex: 'manufacturer',
                key: 'manufacturer',
                search: {
                    type: 'string',
                },
                ellipsis: true,
            },

            {
                title: '产品名称',
                dataIndex: 'product',
                search: {
                    type: 'select',
                    options: () => {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                resolve([
                                    { label: '产品1', value: 'product1' },
                                    { label: '产品2', value: 'product2' },
                                    { label: '产品3', value: 'product3' },
                                ]);
                            }, 3000);
                        });
                    },
                },
            },
            {
                title: '状态',
                dataIndex: 'state',
                search: {
                    type: 'select',
                    options: [
                        { label: '禁用', value: 'notActive' },
                        { label: '离线', value: 'offline' },
                        { label: '在线', value: 'online' },
                    ],
                },
            },
            {
                title: '备注',
                dataIndex: 'description',
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

        const historyList = () => {
            return {
                success: true,
                result: [
                    {
                        id: 'ceb26e40e37453ec9722fd4b79fd566c',
                        userId: '1199596756811550720',
                        type: 'notice-config',
                        key: '3b5fc4f8f7052dc8f8396f68e52499f4',
                        name: '123',
                        content:
                            '{"terms":[{"terms":[{"type":"or","value":"1678607191739809792","termType":"eq","column":"id"},{"type":"and","value":"1","termType":"like","column":"name"},{"type":"and","value":"fixed-media","termType":"eq","column":"provider"}]},{"terms":[{"type":"or","value":"123","termType":"like","column":"manufacturer"},{"type":"and","value":"online","termType":"eq","column":"state"},{"type":"and","value":"fixed-media","termType":"eq","column":"provider"}],"type":"and"}]}',
                        createTime: 1689046714380,
                    },
                    {
                        id: '908f7b26ee9588aaae9a21f52518c29e',
                        userId: '1199596756811550720',
                        type: 'notice-config',
                        key: 'e73874e24ff5e68bb6dd28187627bb85',
                        name: '34020000001000000040',
                        content:
                            '{"terms":[{"terms":[{"type":"or","value":"34020000001000000040","termType":"like","column":"name"},null,null]},{"terms":[null,null,null],"type":"and"}]}',
                        createTime: 1689149964863,
                    },
                ],
            };
        };

        return {
            columns,
            paramsStr,
            onSearch,
            deleteRequest,
            addColumns,
            historyList,
        };
    },
};
</script>

<style scoped></style>
