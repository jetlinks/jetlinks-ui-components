<template>
  <Divider v-bind="props">
    <slot></slot>
  </Divider>
</template>

<script lang="ts" setup>
import { Divider } from 'ant-design-vue';
import { dividerProps } from 'ant-design-vue/lib/divider';

// 定义属性
const props = defineProps(dividerProps());
</script>
