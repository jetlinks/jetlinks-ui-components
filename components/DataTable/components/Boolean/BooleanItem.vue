<template>
    <FormItem label="布尔值" required :name="name" :rules="rules">
        <div class="data-table-boolean-item" style="margin-bottom: 12px">
            <div class="data-table-boolean-item--value">
                <FormItem no-style name="trueText">
                    <Input v-model:value="formData.trueText" @change="change" />
                </FormItem>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <FormItem no-style name="trueValue">
                    <Input
                        v-model:value="formData.trueValue"
                        @change="change"
                    />
                </FormItem>
            </div>
        </div>
        <div class="data-table-boolean-item">
            <div class="data-table-boolean-item--value">
                <FormItem no-style name="falseText">
                    <Input
                        v-model:value="formData.falseText"
                        @change="change"
                    />
                </FormItem>
            </div>
            <div>-</div>
            <div class="data-table-boolean-item--value">
                <FormItem no-style name="falseValue">
                    <Input
                        v-model:value="formData.falseValue"
                        @change="change"
                    />
                </FormItem>
            </div>
        </div>
    </FormItem>
</template>

<script setup lang="ts">
import { FormItem, Input } from '../../../components';
import { reactive, watch } from 'vue';

const props = defineProps({
    value: {
        type: Object,
        default: () => ({}),
    },
    name: {
        type: String,
        default: 'value',
    },
});

const emit = defineEmits(['update:value', 'change']);

const formData = reactive({
    trueText: props.value?.trueText || '是',
    trueValue: props.value?.trueValue || 'true',
    falseText: props.value?.falseText || '否',
    falseValue: props.value?.falseValue || 'false',
});

const rules = [
    {
        validator(_: any, v: any) {
            const isMax = Object.values(v).some(
                (item: string) => item.length > 64,
            );
            const isNull = Object.values(v).some((item: string) => !item);
            if (isMax) {
                return Promise.reject('最多可输入64个字符');
            }

            if (isNull) {
                return Promise.reject('请输入布尔值');
            }

            return Promise.resolve();
        },
    },
];

const change = () => {
    emit('update:value', formData);
    emit('change', formData);
};

watch(
    () => JSON.stringify(props.value),
    () => {
        formData.trueText = props.value?.trueText;
        formData.trueValue = props.value?.trueValue;
        formData.falseText = props.value?.falseText;
        formData.falseValue = props.value?.falseValue;
    },
);
</script>

<style scoped></style>
