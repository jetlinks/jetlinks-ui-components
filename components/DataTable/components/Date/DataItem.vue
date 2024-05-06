<template>
    <FormItem label="时间格式" :name="name" required>
        <AutoComplete
            v-model:value="date"
            :options="options"
            mode="tags"
            placeholder="请选择时间格式"
            @change="change"
        />
    </FormItem>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { FormItem, AutoComplete } from '../../../components';

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
    name: {
        type: String,
        default: 'format',
    },
});

const emit = defineEmits(['update:value']);

const options = [
    { label: 'YYYY-MM-DD hh:mm:ss', value: 'yy-mm-dd hh:mm:ss' },
    { label: 'YYYY-MM-DD', value: 'yy-mm-dd' },
    { label: 'hh:mm:ss', value: 'hh:mm:ss' },
];

const date = ref<string>(props.value);

const change = (v: string[]) => {
    emit('update:value', date.value);
};

watch(
    () => props.value,
    () => {
        date.value = props.value;
    },
    { immediate: true },
);
</script>

<style scoped></style>
