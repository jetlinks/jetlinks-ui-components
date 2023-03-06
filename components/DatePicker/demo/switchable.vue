<docs>
---
order: 1.1
title: 切换不同的选择器
---

## zh-CN

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

## en-US

Switch in different types of pickers by Select.
</docs>
<template>
  <j-space direction="vertical" :size="12">
    <j-select v-model:value="type">
      <j-select-option value="time">Time</j-select-option>
      <j-select-option value="date">Date</j-select-option>
      <j-select-option value="week">Week</j-select-option>
      <j-select-option value="month">Month</j-select-option>
      <j-select-option value="quarter">Quarter</j-select-option>
      <j-select-option value="year">Year</j-select-option>
    </j-select>
    <template v-if="type === 'time'">
      <j-time-picker />
    </template>
    <template v-else>
      <j-date-picker :picker="type" />
    </template>
  </j-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      type: ref<any>('time'),
    };
  },
});
</script>
