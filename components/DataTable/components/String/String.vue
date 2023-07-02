<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <Form layout="vertical" :model="formData">
                <StringItem v-model:value="formData.maxLength" />
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts" name="String">
import { watch, reactive } from 'vue';
import { PopconfirmModal, Form } from '../../../components';
import StringItem from './StringItem.vue';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value']);

const props = defineProps({
    value: {
        type: Number,
        default: undefined,
    },
});

const formData = reactive({
    maxLength: props.value,
});

const confirm = () => {
    emit('update:value', formData.maxLength);
};

watch(
    () => props.value,
    () => {
        formData.maxLength = props.value;
    },
);
</script>

<style scoped></style>
