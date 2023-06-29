<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 450px;"
        @confirm="confirm"
    >
        <template #content>
            <Form ref="formRef" :model="formData.value" layout="vertical">
                <EnumItem
                    ref="tableRef"
                    v-model:value="formData.value"
                    :multiple="multiple"
                />
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';
import { Form, PopconfirmModal } from '../../../components';
import EnumItem from './EnumItem.vue';
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

const emit = defineEmits(['update:value', 'cancel']);

const formRef = ref();
const tableRef = ref();
const formData = reactive({
    value: {
        type: props.value?.type || '1',
        elements: props.value?.elements || [],
    },
});

const source = ref([]);

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
            console.log('开始校验3');
            const tableData = await tableRef.value.getData();
            if (tableData) {
                formRef.value
                    .validate()
                    .then(() => {
                        resolve(true);
                        const value: any = {
                            elements: formData.value.elements,
                        };

                        if (props.multiple) {
                            value.type = formData.value.type;
                        }
                        console.log('formRef.value', formData);
                        emit('update:value', value);
                    })
                    .catch(() => reject(false));
            }
        } catch (e) {
            console.log(e);
            reject(false);
        }
    });
};

watch(
    () => props.value,
    () => {
        formData.value.type = props.value?.type;
        formData.value.elements = props.value?.elements || [];
    },
    { deep: true },
);
</script>

<style scoped></style>
