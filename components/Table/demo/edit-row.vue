<docs>
---
order: 24
title: 可编辑行
---

## zh-CN

带行编辑功能的表格。

</docs>

<template>
    <j-table :columns="columns" :data-source="dataSource" bordered>
        <template #bodyCell="{ column, text, record }">
            <template
                v-if="['name', 'age', 'address'].includes(column.dataIndex)"
            >
                <div>
                    <j-input
                        v-if="editableData[record.key]"
                        v-model:value="
                            editableData[record.key][column.dataIndex]
                        "
                        style="margin: -5px 0"
                    />
                    <template v-else>
                        {{ text }}
                    </template>
                </div>
            </template>
            <template v-else-if="column.dataIndex === 'operation'">
                <div class="editable-row-operations">
                    <span v-if="editableData[record.key]">
                        <j-typography-link @click="save(record.key)"
                            >Save</j-typography-link
                        >
                        <j-popconfirm
                            title="Sure to cancel?"
                            @confirm="cancel(record.key)"
                        >
                            <a>Cancel</a>
                        </j-popconfirm>
                    </span>
                    <span v-else>
                        <a @click="edit(record.key)">Edit</a>
                    </span>
                </div>
            </template>
        </template>
    </j-table>
</template>
<script lang="ts">
import { cloneDeep } from 'lodash-es';
import { defineComponent, reactive, ref } from 'vue';
import type { UnwrapRef } from 'vue';

const columns = [
    {
        title: 'name',
        dataIndex: 'name',
        width: '25%',
    },
    {
        title: 'age',
        dataIndex: 'age',
        width: '15%',
    },
    {
        title: 'address',
        dataIndex: 'address',
        width: '40%',
    },
    {
        title: 'operation',
        dataIndex: 'operation',
    },
];
interface DataItem {
    key: string;
    name: string;
    age: number;
    address: string;
}
const data: DataItem[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}
export default defineComponent({
    setup() {
        const dataSource = ref(data);
        const editableData: UnwrapRef<Record<string, DataItem>> = reactive({});

        const edit = (key: string) => {
            editableData[key] = cloneDeep(
                dataSource.value.filter((item) => key === item.key)[0],
            );
        };
        const save = (key: string) => {
            Object.assign(
                dataSource.value.filter((item) => key === item.key)[0],
                editableData[key],
            );
            delete editableData[key];
        };
        const cancel = (key: string) => {
            delete editableData[key];
        };
        return {
            dataSource,
            columns,
            editingKey: '',
            editableData,
            edit,
            save,
            cancel,
        };
    },
});
</script>
<style scoped>
.editable-row-operations a {
    margin-right: 8px;
}
</style>
