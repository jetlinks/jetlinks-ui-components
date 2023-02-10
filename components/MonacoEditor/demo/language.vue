<docs>
---
order: 0
title: 脚本编辑
---

支持JavaScript脚本语言输入

</docs>
<template>
    <j-monaco-editor v-model:value="value" language="javascript" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>(`const message = "Hello World"`)

    return {
        value
    }
  }
})
</script>
