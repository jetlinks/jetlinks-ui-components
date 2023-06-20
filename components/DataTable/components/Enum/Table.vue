<template>
    <div class="enum-table-warp">
        <j-table :data-source="source" :columns="columns" :pagination="false">
            <template #bodyCell="{ column, record, index }">
                <template v-if="column.dataIndex === 'value'">
                    <j-input
                        v-model:value="record.value"
                        placeholder="请输入"
                        max="64"
                    />
                </template>
                <template v-if="column.dataIndex === 'text'">
                    <j-input
                        v-model:value="record.text"
                        placeholder="请输入"
                        max="64"
                    />
                </template>
                <template v-if="column.dataIndex === 'action'">
                    <j-button type="link" @click="() => deleteItem(index)">
                        <AIcon type="DeleteOutlined" />
                    </j-button>
                </template>
            </template>
        </j-table>
        <j-button class="enum-table-add" @click="addItem">
            <template #icon><AIcon type="PlusOutlined" /></template>
            新增枚举项
        </j-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Table as JTable, Button as JButton, AIcon } from '../../../components';

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

const deleteItem = (index: number) => {
    source.value.splice(index, 1);
    updateValue();
};
</script>

<style scoped></style>
