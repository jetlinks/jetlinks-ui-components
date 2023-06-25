<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 450px;"
        @confirm="confirm"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem
                    label="枚举项"
                    name="elements"
                    required
                    :rules="rules"
                    :validate-first="true"
                >
                    <FormItemRest v-if="multiple">
                        <RadioGroup
                            v-model:value="formData.type"
                            button-style="solid"
                        >
                            <RadioButton value="1">仅单选</RadioButton>
                            <RadioButton value="2">支持多选</RadioButton>
                        </RadioGroup>
                    </FormItemRest>
                    <Table
                        ref="tableRef"
                        v-model:value="formData.elements"
                        @add="addItem"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import Table from './Table.vue';
import {
    Form,
    FormItem,
    FormItemRest,
    PopconfirmModal,
    RadioButton,
    RadioGroup,
} from '../../../components';
import Icon from '../Icon.vue';

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

const emit = defineEmits(['update:value']);

const formRef = ref();
const tableRef = ref();
const formData = reactive({
    type: props.value?.type || '1',
    elements: props.value?.elements || [],
});

const source = ref([]);

const addItem = () => {
    formRef.value.validate();
};

const rules = [
    {
        validator(_, value) {
            console.log('validator', value);
            if (!value?.length) {
                return Promise.reject('添加枚举项');
            }
            return Promise.resolve();
        },
    },
];

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const tableData = await tableRef.value.getData();
            if (tableData) {
                formRef.value
                    .validate()
                    .then(() => {
                        resolve(true);
                        const value: any = {
                            elements: formData.elements,
                        };

                        if (props.multiple) {
                            value.type = formData.type;
                        }
                        console.log('formRef.value', formData);
                        emit('update:value', value);
                    })
                    .catch(() => reject(false));
            }
        } catch (e) {
            reject(false);
        }
    });
};

watch(
    () => props.value,
    () => {
        formData.type = props.value?.type;
        formData.elements = props.value?.elements || [];
    },
    { deep: true },
);
</script>

<style scoped></style>
