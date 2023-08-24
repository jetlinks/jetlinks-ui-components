<docs>

---
order: 6
title: 基础
---

</docs>
<template>
    <div>
        <j-table
            :columns="columns"
            :dataSource="newSource"
            :scroll="{ y: 100 }"
            ref="tableRef"
        >
            <template #bodyCell="{ record }">
                <div>
                    <j-select
                        v-model:value="record.type"
                        style="width: 300px"
                        :options="[{ label: 'Array', value: 'array' }]"
                    />
                    <DataTableArray v-if="record.type" />
                </div>
            </template>
        </j-table>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import {
    DataTableBoolean,
    DataTableArray,
    DataTableObject,
    DataTableDate,
    DataTableEnum,
    DataTableFile,
    DataTableInteger,
    DataTableDouble,
} from 'jetlinks-ui-components';

const columns = ref([
    {
        title: '名称',
        dataIndex: 'name',
        width: 200,
        type: 'TypeSelect',
    },
]);
const newSource = ref([]);

const tableRef = ref();
const editStatusRef = ref(false);

const initData = () => {
    newSource.value = new Array(10).fill('').map((_, index) => {
        return {
            id: new Date().getTime() + index,
            age: index + 1,
            name: '测试文案' + (index + 1),
            type: undefined,
        };
    });
};

initData();
</script>
