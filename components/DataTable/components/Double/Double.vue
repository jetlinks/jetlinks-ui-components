<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
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
                <ScaleItem v-model:value="formData.scale" />
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { reactive, ref, watch } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import ScaleItem from './ScaleItem.vue';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'cancel', 'confirm']);

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
    scale: props.value?.scale || 0, // 精度
});

const confirm = () => {
    emit('update:value', formData);
    emit('confirm', formData);
};

const cancel = () => {
    formRef.value?.resetFields();
    emit('cancel');
};

watch(
    () => props.value,
    () => {
        formData.unit = props.value?.unit;
        formData.scale = props.value?.scale;
    },
    { deep: true },
);
</script>

<style scoped></style>
