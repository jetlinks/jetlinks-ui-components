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
import { reactive } from 'vue';

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

const emit = defineEmits(['update:value']);

const formData = reactive({
    trueText: props.value?.trueText || '是',
    trueValue: props.value?.trueValue || 'true',
    falseText: props.value?.falseText || '否',
    falseValue: props.value?.falseValue || 'false',
});

const rules = [
    {
        validator(_, value) {
            console.log(value);
            if (
                !value.trueText ||
                !value.trueValue ||
                !value.falseText ||
                !value.falseValue
            ) {
                return Promise.reject('请输入布尔值');
            }
            return Promise.resolve();
        },
        trigger: 'change',
    },
];

const change = () => {
    emit('update:value', formData);
};
</script>

<style scoped></style>
