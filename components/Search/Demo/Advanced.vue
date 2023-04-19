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
                    rename: 'typeTest',
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
        ];

        const onSearch = (e) => {
            paramsStr.value = JSON.stringify(e);
        };

        const deleteRequest = async (id) => {
            console.log(id);
        };

        return {
            columns,
            paramsStr,
            onSearch,
            deleteRequest,
        };
    },
};
</script>

<style scoped></style>
