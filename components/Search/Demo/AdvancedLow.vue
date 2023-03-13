<docs>
---
order: 2
title: AdvancedSearch组件
---

AdvancedSearch组件 type为simple模式

</docs>

<template>
    <j-advanced-search :columns="columns" @search="onSearch" type="simple" />
    <div>
        查询结果:
        <br />
        {{ paramsStr }}
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'AdvancedSearchLow',
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
                },
            },
            {
                title: '分类',
                dataIndex: 'tree',
                search: {
                    type: 'treeSelect',
                    options: () => {
                        return new Promise((res) => {
                            res([
                                { key: 123, id: 123, name: '12311' },
                                {
                                    key: 1231,
                                    id: 1231,
                                    name: '123111',
                                    children: [
                                        { key: 321, id: 321, name: '321' },
                                    ],
                                },
                            ]);
                        });
                    },
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
