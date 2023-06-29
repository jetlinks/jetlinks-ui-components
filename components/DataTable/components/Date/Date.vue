<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <DataItem v-model="formData.date" />
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, PopconfirmModal } from '../../../components';
import DataItem from './DataItem.vue';
import Icon from '../Icon.vue';

type Emits = {
    (e: 'update:value', data: string | undefined): void;
    (e: 'change', data: string | undefined): void;
    (e: 'cancel'): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const formRef = ref();

const formData = reactive<{ date: any }>({
    date: props.value ? [props.value] : [],
});

const cancel = () => {
    formRef.value?.resetFields();
    emit('cancel');
};

const confirm = () => {
    emit('update:value', formData.date);
};
</script>

<style scoped></style>
