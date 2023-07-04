<template>
    <FormItem label="精度" :name="name">
        <InputNumber
            v-model:value="scale"
            style="width: 100%"
            :precision="0"
            :min="0"
            :max="9999"
            @change="change"
        />
    </FormItem>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { FormItem, InputNumber } from '../../../components';

const props = defineProps({
    value: {
        type: Number,
        default: undefined,
    },
    name: {
        type: String,
        default: 'scale',
    },
});

const emit = defineEmits(['update:value']);

const scale = ref(0);

const change = () => {
    emit('update:value', scale.value);
};

watch(
    () => props.value,
    () => {
        scale.value = props.value;
    },
    { immediate: true },
);
</script>

<style scoped></style>
