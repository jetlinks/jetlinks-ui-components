<template>
    <FormItem
        label="枚举项"
        :name="name"
        required
        :rules="rules"
        :validate-first="true"
    >
        <FormItemRest v-if="multiple">
            <ButtonGroup
                v-model:value="formData.type"
                @change="
                    () => {
                        typeChange;
                    }
                "
            />
        </FormItemRest>
        <div class="enum-table-warp">
            <DataTable
                ref="tableRef"
                :data-source="formData.elements"
                :columns="columns"
                :serial="true"
                :show-tool="false"
                item-key="value"
                @change="changeValue"
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

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    type: {
        type: Boolean,
        default: false,
    },
    multiple: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        default: 'elements',
    },
});

const emit = defineEmits(['update:value', 'update:type', 'cancel', 'add']);

const formRef = ref();
const formData = reactive({
    type: props.value?.type || '1',
    elements: props.value?.elements || [],
});

const change = (data) => {
    formData.elements = data;
};

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
            console.log('enumItem - value', formData, value.elements, props);
            if (!value.elements?.length) {
                return Promise.reject('请添加枚举项');
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
            .catch((err) => {
                console.log(err);
                reject(false);
            });
    });

const addItem = () => {
    const newData = tableRef.value?.addItem({
        value: undefined,
        text: undefined,
    });
    console.log('update', newData);
    emit('update:value', {
        ...formData,
        elements: newData,
    });
};

const deleteItem = (index) => {
    const newData = tableRef.value?.removeItem(index);
    console.log('update', newData);
    emit('update:value', {
        ...formData,
        elements: newData,
    });
};

const changeValue = (newData) => {
    emit('update:value', {
        ...formData,
        elements: newData,
    });
};
const cancel = () => {
    tableRef.value?.initItems();
};

const typeChange = () => {
    emit('update:type', formData.type);
};

watch(
    () => [props.value, props.type],
    () => {
        formData.type = props.value.type;
        formData.elements = props.value.elements || [];
    },
    { deep: true },
);

defineExpose({
    getData: getData,
    cancel: cancel,
});
</script>

<style scoped></style>
