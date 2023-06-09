<template>
    <j-table :source="source" :columns="columns">
        <template #bodyCell="{ column, record }">
            <template v-if="column.dataIndex === 'value'">
                <j-input v-model="record.value" placeholder="请输入" />
            </template>
            <template v-if="column.dataIndex === 'text'">
                <j-input v-model="record.text" placeholder="请输入" />
            </template>
        </template>
    </j-table>
    <j-button @click="addItem">新增枚举项</j-button>
</template>

<script setup lang="ts" name="EnumTable">
import { ref } from 'vue';
const source = ref([]);

const emit = defineEmits(['update:value', 'change']);

const columns = [
    {
        title: 'value',
        dataIndex: 'value',
    },
    {
        title: 'text',
        dataIndex: 'text',
    },
    {
        title: '操作',
        dataIndex: 'action',
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

const deleteItem = (index: number) => {
    source.value = source.value.slice(index, 1);
    updateValue();
};
</script>

<style scoped></style>
