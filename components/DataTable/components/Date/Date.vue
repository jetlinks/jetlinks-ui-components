<template>
    <PopconfirmModal body-style="padding-top:4px;" @confirm="confirm">
        <template #content>
            <Form :model="formData" layout="vertical">
                <FormItem label="格式" required>
                    <Select
                        v-model:value="formData.date"
                        :options="options"
                        mode="tags"
                        placeholder="请选择时间格式"
                        @change="change"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { Form, FormItem, PopconfirmModal, Select } from '../../../components';
import Icon from '../Icon.vue';

type Emits = {
    (e: 'update:value', data: string | undefined): void;
    (e: 'change', data: string | undefined): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const options = [
    { label: 'yy-mm-dd hh:mm:ss', value: 'yy-mm-dd hh:mm:ss' },
    { label: 'yy-mm-dd', value: 'yy-mm-dd' },
    { label: 'hh:mm:ss', value: 'hh:mm:ss' },
];

const formData = reactive<{ date: any }>({
    date: props.value ? [props.value] : [],
});

const change = (v: string[]) => {
    const newValue = v.length > 1 ? v.pop() : v?.[0];
    formData.date = [newValue];
    emit('change', newValue);
};

const confirm = () => {
    emit('update:value', formData.date);
};
</script>

<style scoped></style>
