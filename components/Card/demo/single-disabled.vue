<docs>
---
order: 3
title: 某个禁用
---

</docs>

<template>
  <j-card v-model:value="value" :options="options"/>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue";

const value = ref<any>();
const state = reactive({
  options: [{
    value: '1',
    label: '识别性',
    iconUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
  }, {
    value: '2',
    label: '独特性',
    iconUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
  }, {
    value: '3',
    label: '延展性',
    iconUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    disabled: true, //禁用标志
  }]
});

const {options} = toRefs(state);
</script>
