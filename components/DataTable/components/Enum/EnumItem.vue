<template>
    <FormItem
        label="枚举项"
        name="elements"
        required
        :rules="rules"
        :validate-first="true"
    >
        <FormItemRest v-if="multiple">
            <ButtonGroup v-model:value="formData.type" />
        </FormItemRest>
        <div class="enum-table-warp">
            <DataTable
                ref="tableRef"
                :data-source="formData.elements"
                :columns="columns"
                :serial="true"
                :show-tool="false"
                item-key="value"
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
    </FormItem>
</template>

<script setup>
import { reactive, defineExpose, watch, ref } from 'vue';

import {
    FormItem,
    FormItemRest,
    DataTable,
    Button as JButton,
    AIcon,
} from '../../../components';
import ButtonGroup from './ButtonGroup.vue';
import Table from './Table.vue';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    multiple: {
        type: Boolean,
        default: false,
    },
});

const emit = defineEmits(['update:value', 'cancel', 'add']);

const formData = reactive({
    type: props.value?.type || '1',
    elements: props.value?.elements || [],
});

const tableRef = ref();

const columns = [
    {
        title: 'Value',
        dataIndex: 'value',
        type: 'text',
        width: 150,
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

const rules = [
    {
        validator(_, value) {
            if (!value?.length) {
                return Promise.reject('添加枚举项');
            }
            return Promise.resolve();
        },
    },
];

const getData = () =>
    new Promise((resolve, reject) => {
        tableRef.value
            ?.getData()
            ?.then((data) => {
                resolve(data);
            })
            .catch(() => reject(false));
    });

const addItem = () => {
    formData.elements?.push({
        value: undefined,
        text: undefined,
    });
};

const deleteItem = (index) => {
    formData.elements?.splice(index, 1);
};

watch(
    () => props.value,
    () => {
        formData.type = props.value?.type;
        formData.elements = props.value?.elements || [];
    },
    { deep: true },
);

defineExpose({
    getData: getData,
});
</script>

<style scoped></style>
