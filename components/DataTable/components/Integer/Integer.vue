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
                <FormItem
                    label="单位"
                    name="unit"
                    :rules="[{ max: 64, message: '最多可输入64个字符' }]"
                >
                    <UnitSelect
                        v-model:value="formData.unit"
                        :options="options"
                    />
                </FormItem>
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import UnitSelect, { UnitProps } from '../UnitSelect';
import { inject, reactive, ref } from 'vue';
import { Form, FormItem, PopconfirmModal } from '../../../components';
import Icon from '../Icon.vue';
import { FULL_CODE } from '../../index';

const emit = defineEmits(['update:value', 'confirm', 'cancel']);

const props = defineProps({
    ...UnitProps,
    value: {
        type: String,
        default: undefined,
    },
    placement: {
        type: String,
        default: 'top',
    },
});
const formRef = ref();
const formData = reactive({
    unit: props.value,
});
const fullRef = inject(FULL_CODE);
const confirm = () => {
    return new Promise(async (resolve, reject) => {
        formRef.value
            .validate()
            .then(() => {
                resolve(true);
                emit('update:value', formData.unit);
                emit('confirm', formData.unit);
            })
            .catch((e) => {
                reject(false);
            });
    });
};

const cancel = () => {
    formRef.value?.resetFields();
    formData.unit = props.value;
    emit('cancel');
};
</script>
