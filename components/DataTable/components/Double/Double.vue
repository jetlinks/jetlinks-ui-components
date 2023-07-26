<template>
    <PopconfirmModal
        body-style="padding-top:4px; width: 260px;"
        :placement="placement"
        :get-popup-container="(node) => fullRef || node"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem v-if="showUnit" name="unit" label="单位">
                    <UnitSelect
                        v-model:value="formData.unit"
                        :options="options"
                    />
                </FormItem>
                <ScaleItem v-model:value="formData.scale" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { inject, reactive, ref, watch } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import ScaleItem from './ScaleItem.vue';
import Icon from '../Icon.vue';
import { FULL_CODE } from '../../index';

const emit = defineEmits(['update:value', 'cancel', 'confirm']);

const props = defineProps({
    ...UnitProps,
    value: {
        type: Object,
        default: () => ({}),
    },
    showUnit: {
        type: Boolean,
        default: true,
    },
    placement: {
        type: String,
        default: 'top',
    },
});

const formRef = ref();
const fullRef = inject(FULL_CODE);
const formData = reactive({
    unit: props.value?.unit,
    scale: props.value?.scale || 0, // 精度
});

const confirm = () => {
    const obj = { ...formData };
    if (!props.showUnit) {
        delete obj.unit;
    }
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
