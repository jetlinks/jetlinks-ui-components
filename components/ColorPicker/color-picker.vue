<template>
    <ColorPicker
        v-model:pureColor="pureColor"
        v-model:gradientColor="gradientColor"
    />
</template>

<script lang="ts" setup name="ColorPicker">
import { ref } from 'vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';

const pureColor = ref('red');
const gradientColor = ref(
    'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)',
);
</script>

<style scoped lang="less"></style>
