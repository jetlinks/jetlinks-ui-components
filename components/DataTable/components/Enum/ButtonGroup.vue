<template>
    <CheckButton
        v-model:value="myValue"
        :options="[
            { label: '仅单选', value: false },
            { label: '支持多选', value: true },
        ]"
        @change="change"
    />
</template>

<script setup lang="ts">
import { CheckButton } from '../../../components';
import { ref, watch } from 'vue';

const props = defineProps({
    value: {
        type: String,
        default: undefined,
    },
});

const emit = defineEmits(['update:value']);

const myValue = ref();

const change = () => {
    emit('update:value', myValue.value);
};

watch(
    () => props.value,
    () => {
        myValue.value = props.value;
    },
);
</script>

<style scoped></style>
