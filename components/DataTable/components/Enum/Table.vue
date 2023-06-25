<template>
    <div class="enum-table-warp">
        <DataTable
            :data-source="source"
            :columns="columns"
            @change="valueChange"
        >
            <template #action="{ data }">
                <j-button type="link" @click="() => deleteItem(data.index)">
                    <AIcon type="DeleteOutlined" />
                </j-button>
            </template>
        </DataTable>
        <j-button class="enum-table-add" @click="addItem">
            <template #icon><AIcon type="PlusOutlined" /></template>
            新增枚举项
        </j-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { DataTable, Button as JButton, AIcon } from '../../../components';

const source = ref([]);

const emit = defineEmits(['update:value', 'change']);

const columns = [
    {
        title: 'value',
        dataIndex: 'value',
        type: 'text',
        width: 100,
        form: {
            required: true,
            rules: [],
        },
    },
    {
        title: 'text',
        dataIndex: 'text',
        type: 'text',
        width: 100,
        form: {
            required: true,
            rules: [],
        },
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 80,
    },
];

const updateValue = () => {
    emit('update:value', source.value);
    emit('change', source.value);
};

const addItem = () => {
    source.value.push({
        value: undefined,
        text: undefined,
    });

    updateValue();
};

const valueChange = (data: any) => {
    source.value = data;
    updateValue();
};

const deleteItem = (index: number) => {
    source.value.splice(index, 1);
    updateValue();
};
</script>

<style scoped></style>
