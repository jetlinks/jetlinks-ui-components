<docs>
---
order: 0
title: Search组件
---

Search组件基本使用

</docs>

<template>
    <j-search :columns="columns" @search="onSearch" />
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
        const columns = [
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
                    options: [
                        { label: '类型1', value: 1 },
                        { label: '类型2', value: 2 },
                    ],
                    componentProps: {},
                },
            },
            {
                title: '地址',
                dataIndex: 'address',
                search: {
                    type: 'string',
                },
            },
            {
                title: '时间',
                dataIndex: 'time',
                search: {
                    type: 'timeRange',
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
        };
    },
};
</script>

<style scoped></style>
