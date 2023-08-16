<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
        :placement="placement"
        :get-popup-container="(node) => fullRef || document.body"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <DataItem v-model:value="formData.format" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { inject, reactive, ref, watch } from 'vue';
import { Form, PopconfirmModal } from '../../../components';
import DataItem from './DataItem.vue';
import Icon from '../Icon.vue';
import { FULL_CODE } from '../../index';

type Emits = {
    (e: 'update:value', data: string | undefined): void;
    (e: 'confirm', data: string | undefined): void;
    (e: 'cancel'): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
    placement: {
        type: String,
        default: 'top',
    },
});

const formRef = ref();
const fullRef = inject(FULL_CODE);
const formData = reactive<{ format: any }>({
    format: props.value,
});

const cancel = () => {
    formRef.value?.resetFields();
    formData.format = props.value;
    emit('cancel');
};

const confirm = () => {
    emit('update:value', formData.format);
    emit('confirm', formData.format);
};

watch(
    () => props.value,
    () => {
        formData.format = props.value;
    },
);
</script>

<style scoped></style>
