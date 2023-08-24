<docs>
---
order: 6
title: 预加载的卡片
---

## zh-CN

数据读入前会有文本块样式

</docs>

<template>
  <j-card :loading="loading" title="Card title">whatever content</j-card>
  <j-button style="margin-top: 16px" @click="handleClick">Toggle loading</j-button>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const loading = ref(true);

    const handleClick = () => {
      loading.value = !loading.value;
    };

    return {
      loading,
      handleClick,
    };
  },
});
</script>
