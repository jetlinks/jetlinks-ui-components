<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:400px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <Form ref="formRef" :model="formData" layout="vertical">
                <FormItem label="元素类型" required name="type" :rules="rules">
                    <TypeSelect v-model:value="formData.type" />
                </FormItem>
                <FormItem
                    v-if="['float', 'double'].includes(formData.type)"
                    label="精度"
                    name="scale"
                >
                    <InputNumber
                        v-model:value="formData.scale"
                        :precision="0"
                        min="0"
                        :max="9999"
                    />
                </FormItem>
                <FormItem
                    v-else-if="['text', 'string'].includes(formData.type)"
                    label="最大长度"
                    name="scale"
                >
                    <InputNumber
                        v-model:value="formData.maxLength"
                        :precision="0"
                        min="0"
                        :max="9999"
                    />
                </FormItem>
                <FormItem
                    v-else-if="formData.type === 'boolean'"
                    label="布尔值"
                    required
                    name="value"
                    :rules="rules"
                >
                    <div
                        class="data-table-boolean-item"
                        style="margin-bottom: 12px"
                    >
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueText">
                                <Input v-model:value="formData.trueText" />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="trueValue">
                                <Input v-model:value="formData.trueValue" />
                            </FormItem>
                        </div>
                    </div>
                    <div class="data-table-boolean-item">
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseText">
                                <Input v-model:value="formData.falseText" />
                            </FormItem>
                        </div>
                        <div>-</div>
                        <div class="data-table-boolean-item--value">
                            <FormItem no-style name="falseValue">
                                <Input v-model:value="formData.falseValue" />
                            </FormItem>
                        </div>
                    </div>
                </FormItem>
                <FormItem
                    v-else-if="formData.type === 'date'"
                    label="格式"
                    required
                >
                    <Select
                        v-model:value="formData.date"
                        :options="options"
                        mode="tags"
                        placeholder="请选择时间格式"
                    />
                </FormItem>
            </Form>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts">
import TypeSelect from '../Type';
import { reactive, ref } from 'vue';
import {
    Form,
    FormItem,
    PopconfirmModal,
    InputNumber,
    Input,
    Select,
} from '../../../components';
import Icon from '../Icon.vue';

const emit = defineEmits(['update:value', 'cancel']);

const props = defineProps({
    value: {
        type: Object,
        default: undefined,
    },
});

const formRef = ref();

const formData = reactive({
    type: props.value?.type,
    scale: props.value?.scale,
    maxLength: props.value?.maxLength,
    trueText: props.value?.trueText,
    trueValue: props.value?.trueValue,
    falseText: props.value?.falseText,
    falseValue: props.value?.falseValue,
    date: props.value?.date,
});

const options = [
    { label: 'yy-mm-dd hh:mm:ss', value: 'yy-mm-dd hh:mm:ss' },
    { label: 'yy-mm-dd', value: 'yy-mm-dd' },
    { label: 'hh:mm:ss', value: 'hh:mm:ss' },
];

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
