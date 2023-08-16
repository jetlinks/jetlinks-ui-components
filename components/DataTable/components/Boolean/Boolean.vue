<template>
    <PopconfirmModal
        body-style="padding-top:4px;width: 260px;"
        :placement="placement"
        :get-popup-container="(node) => fullRef || document.body"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <BooleanItem v-model:value="formData.value" @change="change" />
            </Form>
        </template>
        <slot>
            <Icon />
        </slot>
    </PopconfirmModal>
</template>

<script setup lang="ts">
import { Form, PopconfirmModal } from '../../../components';
import BooleanItem from './BooleanItem.vue';
import Icon from '../Icon.vue';
import { inject, reactive, ref, watch } from 'vue';
import { cloneDeep } from 'lodash-es';
import { FULL_CODE } from '../../index';

const emit = defineEmits(['update:value', 'cancel', 'confirm']);

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    placement: {
        type: String,
        default: 'top',
    },
});

const formRef = ref();
const fullRef = inject(FULL_CODE);
const formData = reactive({
    value: {
        trueText: props.value?.trueText || '是',
        trueValue: props.value?.trueValue || 'true',
        falseText: props.value?.falseText || '否',
        falseValue: props.value?.falseValue || 'false',
    },
});

const change = () => {
    formRef.value.validateFields('value');
};

const cancel = () => {
    formRef.value?.resetFields();
    formData.value = {
        trueText: props.value?.trueText || '是',
        trueValue: props.value?.trueValue || 'true',
        falseText: props.value?.falseText || '否',
        falseValue: props.value?.falseValue || 'false',
    };
    emit('cancel');
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        const data = await formRef.value!.validate().catch(() => {
            reject();
        });
        if (data) {
            emit('update:value', cloneDeep(formData.value));
            emit('confirm', cloneDeep(formData.value));
            resolve(true);
        }
    });
};

watch(
    () => JSON.stringify(props.value),
    () => {
        formData.value = {
            trueText: props.value?.trueText || '是',
            trueValue: props.value?.trueValue || 'true',
            falseText: props.value?.falseText || '否',
            falseValue: props.value?.falseValue || 'false',
        };
    },
);
</script>
