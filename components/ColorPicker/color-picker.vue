<template>
    <ColorPicker v-bind="props" :btn-style="btnStyle[size]" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ColorPicker from 'colorpicker-v3';
import 'colorpicker-v3/style.css';

const props = defineProps({
    size: { type: String, default: 'default' },
});

// 选择器尺寸
const btnStyle = ref({
    mini: { width: '22px', height: '22px' },
    small: { width: '32px', height: '32px' },
    large: { width: '50px', height: '50px' },
});
</script>
