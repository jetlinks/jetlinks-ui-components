<docs>
---
order: 0
title: 基本
---

采用分页的形式分隔长列表，每次只加载一个页面。

</docs>
<template>
  <j-pagination :total="total" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const total = ref(100)

    return {
      total
    }
  }
})
</script>