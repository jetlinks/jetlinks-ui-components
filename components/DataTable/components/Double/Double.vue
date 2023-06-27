<template>
    <PopconfirmModal
        body-style="padding-top:4px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem name="unit" label="单位">
                    <UnitSelect
                        v-model:value="formData.unit"
                        :options="options"
                    />
                </FormItem>
                <FormItem name="degree" label="精度">
                    <InputNumber
                        v-model:value="formData.degree"
                        :precision="0"
                        min="0"
                        :max="9999"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { reactive, ref, watch } from 'vue';
import {
    Form,
    FormItem,
    PopconfirmModal,
    InputNumber,
} from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'cancel']);

const props = defineProps({
    ...UnitProps,
    value: {
        type: Object,
        default: () => ({}),
    },
});

const formRef = ref();

const formData = reactive({
    unit: props.value?.unit,
    degree: props.value?.degree || 0, // 精度
});

const confirm = () => {
    emit('update:value', formData);
};

const cancel = () => {
    formRef.value?.resetFields();
    emit('cancel');
};

watch(
    () => props.value,
    () => {
        formData.unit = props.value?.unit;
        formData.degree = props.value?.degree;
    },
    { deep: true },
);
</script>

<style scoped></style>
