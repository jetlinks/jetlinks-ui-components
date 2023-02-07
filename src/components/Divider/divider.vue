<template>
    <Divider v-bind="props" class="jl-divider" />
</template>

<script lang="ts" setup>
import { Divider } from 'ant-design-vue';
import { dividerProps } from 'ant-design-vue/es/divider';
import { defineProps } from 'vue';

// 定义属性
const props = defineProps({
    ...dividerProps(),
});
</script>

<style scoped lang="less">
.jl-divider {
    height: 1px;
    background-color: #e9e9e9;
}
</style>
