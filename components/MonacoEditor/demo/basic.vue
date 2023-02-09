<docs>
---
order: 0
title: 基本用法
---

基本用法, 简单的json输入

</docs>
<template>
    <j-monaco-editor v-model:value="value" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>(`{ "message": "Hello World" }`)

    return {
        value
    }
  }
})
</script>
