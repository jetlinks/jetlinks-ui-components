<template>
    <j-check-button
        :options="[
            { label: '选项1', value: '1' },
            { label: '选项2', value: '2' },
            { label: '选项3', value: '3' },
            { label: '选项4', value: '4', disabled: true },
        ]"
        v-model:value="value"
    />
</template>

<script setup>
import { ref } from 'vue';

const value = ref();
</script>

<style scoped></style>
