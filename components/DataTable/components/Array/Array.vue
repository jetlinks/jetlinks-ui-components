<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:160px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem label="元素类型" required name="type" :rules="rules">
                    <TypeSelect v-model:value="formData.type" />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import TypeSelect from '../Type';
import { reactive, ref } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'cancel']);

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const formRef = ref();

const formData = reactive({
    type: props.value,
});

const rules = [
    {
        validator(_, value) {
            console.log(value);
            if (!value) {
                return Promise.reject('请选择元素类型');
            }
            return Promise.resolve();
        },
        trigger: 'change',
    },
];

const cancel = () => {
    formRef.value?.resetFields();
    emit('cancel');
};

const confirm = () => {
    emit('update:value', formData);
};
</script>

<style scoped></style>
