<template>
    <FormItem label="最大长度" :name="name">
        <InputNumber
            v-model:value="maxLength"
            style="width: 100%"
            :precision="0"
            :min="0"
            :max="9999"
            placeholder="请输入0-9999以内的整数"
            @change="change"
        />
    </FormItem>
</template>

<script setup>
import { ref, watch } from 'vue';
import { FormItem, InputNumber } from '../../../components';

const props = defineProps({
    value: {
        type: Number,
        default: undefined,
    },
    name: {
        type: String,
        default: 'maxLength',
    },
});

const emit = defineEmits(['update:value']);

const maxLength = ref(0);

const change = () => {
    emit('update:value', maxLength.value);
};

watch(
    () => props.value,
    () => {
        maxLength.value = props.value;
    },
    { immediate: true },
);
</script>

<style scoped></style>
