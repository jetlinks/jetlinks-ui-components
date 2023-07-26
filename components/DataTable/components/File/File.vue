<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
        :placement="placement"
        :get-popup-container="(node) => fullRef || node"
        @confirm="confirm"
    >
        <template #content>
            <Form :model="formData" layout="vertical">
                <FileType v-model:value="formData.file" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup name="File" lang="ts">
import { inject, reactive } from 'vue';
import {
    Form,
    FormItem,
    PopconfirmModal,
    CheckButton,
} from '../../../components';
import FileType from './FileType.vue';
import Icon from '../Icon.vue';
import { FULL_CODE } from '../../index';

const emit = defineEmits(['update:value', 'confirm']);

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

const rules = [
    {
        validator: (_, value) => {
            if (!value) {
                return Promise.reject('请选择文件类型');
            }
            return Promise.resolve();
        },
    },
];

const formData = reactive({
    file: props.value,
});

const confirm = () => {
    emit('update:value', formData.file);
    emit('confirm', formData.file);
};
</script>

<style scoped></style>
