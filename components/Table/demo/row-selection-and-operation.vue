<docs>
---
order: 3
title: 选择和操作
---

## zh-CN

选择后进行操作，完成后清空选择，通过 `rowSelection.selectedRowKeys` 来控制选中项。

</docs>

<template>
    <div>
        <div style="margin-bottom: 16px">
            <j-button
                type="primary"
                :disabled="!hasSelected"
                :loading="loading"
                @click="start"
            >
                Reload
            </j-button>
            <span style="margin-left: 8px">
                <template v-if="hasSelected">
                    {{ `Selected ${selectedRowKeys.length} items` }}
                </template>
            </span>
        </div>
        <j-table
            :row-selection="{
                selectedRowKeys: selectedRowKeys,
                onChange: onSelectChange,
            }"
            :columns="columns"
            :data-source="data"
        />
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';

type Key = string | number;

interface DataType {
    key: Key;
    name: string;
    age: number;
    address: string;
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data: DataType[] = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export default defineComponent({
    setup() {
        const state = reactive<{
            selectedRowKeys: Key[];
            loading: boolean;
        }>({
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        });
        const hasSelected = computed(() => state.selectedRowKeys.length > 0);

        const start = () => {
            state.loading = true;
            // ajax request after empty completing
            setTimeout(() => {
                state.loading = false;
                state.selectedRowKeys = [];
            }, 1000);
        };
        const onSelectChange = (selectedRowKeys: Key[]) => {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            state.selectedRowKeys = selectedRowKeys;
        };

        return {
            data,
            columns,
            hasSelected,
            ...toRefs(state),

            // func
            start,
            onSelectChange,
        };
    },
});
</script>
