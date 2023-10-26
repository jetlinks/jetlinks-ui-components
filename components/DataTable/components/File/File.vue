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
                <FileType v-model:value="formData.file" name="file" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup name="File" lang="ts">
import { inject, reactive, ref, watch } from 'vue';
import { Form, PopconfirmModal } from '../../../components';
import FileType from './FileType.vue';
import Icon from '../Icon.vue';
import { FULL_CODE } from '../../index';

const emit = defineEmits(['update:value', 'confirm', 'cancel']);

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

const fullRef = inject(FULL_CODE);

const formRef = ref();
const formData = reactive({
    file: props.value,
});

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        formRef.value
            .validate()
            .then(() => {
                resolve(true);
                emit('update:value', formData.file);
                emit('confirm', formData.file);
            })
            .catch(() => {
                reject(false);
            });
    });
};

const cancel = () => {
    formRef.value?.resetFields();
    formData.file = props.value;
    emit('cancel');
};

watch(
    () => props.value,
    () => {
        formData.file = props.value;
    },
);
</script>

<style scoped></style>
