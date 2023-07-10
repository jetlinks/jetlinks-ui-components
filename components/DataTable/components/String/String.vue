<template>
    <PopconfirmModal
        body-style="padding-top:4px;"
        :placement="placement"
        @confirm="confirm"
    >
        <template #content>
            <Form layout="vertical" :model="formData">
                <StringItem v-model:value="formData.maxLength" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts" name="String">
import { watch, reactive } from 'vue';
import { PopconfirmModal, Form } from '../../../components';
import StringItem from './StringItem.vue';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'confirm']);

const props = defineProps({
    value: {
        type: Number,
        default: undefined,
    },
    placement: {
        type: String,
        default: 'top',
    },
});

const formData = reactive({
    maxLength: props.value,
});

const confirm = () => {
    emit('update:value', formData.maxLength);
    emit('confirm', formData.maxLength);
};

watch(
    () => props.value,
    () => {
        formData.maxLength = props.value;
    },
);
</script>

<style scoped></style>
