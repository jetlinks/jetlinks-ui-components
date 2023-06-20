<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <Form :model="formData" layout="vertical">
                <FormItem label="文件类型" required :rules="rules">
                    <j-radio-group
                        v-model:value="formData.file"
                        button-style="solid"
                    >
                        <j-space>
                            <j-radio-button value="url">URL</j-radio-button>
                            <j-radio-button value="base64"
                                >Base64</j-radio-button
                            >
                            <j-radio-button value="binary"
                                >binary</j-radio-button
                            >
                        </j-space>
                    </j-radio-group>
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup name="File" lang="ts">
import { reactive } from 'vue';
import {
    Form,
    FormItem,
    PopconfirmModal,
    RadioGroup as JRadioGroup,
    Space as JSpace,
    RadioButton as JRadioButton,
} from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value']);

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

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
    emit('update:value', formData);
};
</script>

<style scoped></style>
