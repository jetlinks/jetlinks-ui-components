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
                    defaultTermType: 'eq',
                },
            },
            {
                title: '名称',
                dataIndex: 'name',
                search: {
                    type: 'string',
                },
            },
            {
                title: '备注',
                dataIndex: 'description',
                search: {
                    type: 'string',
                },
            },
            {
                title: '状态',
                dataIndex: 'status',
                search: {
                    type: 'select',
                    options: [
                        { label: '测试1', value: '1' },
                        { label: '测试2', value: '2' },
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
                        id: 'cb3c8bda833c79ba0808bb7426efa0fd',
                        userId: '1199596756811550720',
                        type: 'system-role',
                        key: 'ff260831bd7c91786e7dfb032ade5635',
                        name: '333333333',
                        content:
                            '{"terms":[{"terms":[{"type":"or","value":"1231","termType":"eq","column":"id"},null,null]},{"terms":[{"type":"or","value":"123","termType":"like","column":"name"},null,null],"type":"and"}]}',
                        createTime: 1689063477221,
                    },
                    {
                        id: 'b1b503ae439b3d7feb8c5451e3ea1c73',
                        userId: '1199596756811550720',
                        type: 'system-role',
                        key: 'ecfb81dfcd25ba7b760fbfe09249fbef',
                        name: '前端测试',
                        content:
                            '{"terms":[{"terms":[{"type":"or","value":"1231","termType":"eq","column":"id"},{"type":"or","value":"231","termType":"like","column":"name"},{"type":"or","value":"11","termType":"like","column":"description"}]},{"terms":[{"type":"or","value":"123","termType":"like","column":"name"},{"type":"or","value":"213","termType":"like","column":"description"},{"type":"or","value":"1","termType":"eq","column":"status"}],"type":"and"}]}',
                        createTime: 1689148363454,
                    },
                    {
                        id: '14b5e655e2b3fc2037f89ec1869ec159',
                        userId: '1199596756811550720',
                        type: 'system-role',
                        key: 'dc3d77fd7bb33794d05e398f9af8028b',
                        name: '前端测试2',
                        content:
                            '{"terms":[{"terms":[{"type":"or","value":"11111111","termType":"eq","column":"id"},{"type":"or","value":"22222222","termType":"like","column":"name"},{"type":"or","value":"33333333","termType":"like","column":"description"}]},{"terms":[{"type":"or","value":"44444444","termType":"like","column":"name"},{"type":"or","value":"55555555","termType":"like","column":"description"},{"type":"or","value":"6666666","termType":"like","column":"name"}],"type":"and"}]}',
                        createTime: 1689151365096,
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
