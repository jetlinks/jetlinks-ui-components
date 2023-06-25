<template>
    <div class="enum-table-warp">
        <DataTable
            ref="tableRef"
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
import { ref, defineExpose, nextTick } from 'vue';
import { DataTable, Button as JButton, AIcon } from '../../../components';

const emit = defineEmits(['update:value', 'change', 'add']);

const props = defineProps({
    value: {
        type: Array,
        default: () => [],
    },
});

const source = ref(props.value || []);
const tableRef = ref();

const columns = [
    {
        title: 'Value',
        dataIndex: 'value',
        type: 'text',
        width: 100,
        form: {
            required: true,
            rules: [
                {
                    required: true,
                    message: '请输入value',
                },
            ],
        },
    },
    {
        title: 'Text',
        dataIndex: 'text',
        type: 'text',
        width: 100,
        form: {
            required: true,
            rules: [
                {
                    required: true,
                    message: '请输入Text',
                },
            ],
        },
    },
    {
        title: '操作',
        dataIndex: 'action',
        width: 60,
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
    nextTick(() => {
        emit('add');
        updateValue();
    });
};

const valueChange = (data: any) => {
    source.value = data;
    updateValue();
};

const deleteItem = (index: number) => {
    source.value.splice(index, 1);
    updateValue();
};

const getData = () => {
    return new Promise((resolve, reject) => {
        tableRef.value
            .getData()
            .then(() => {
                resolve(true);
            })
            .catch((err) => reject(err));
    });
};

defineExpose({
    getData: getData,
});
</script>

<style scoped></style>
