<docs>
---
order: 4
title: 清除
---

## zh-CN

支持允许或者禁用清除。

</docs>
<template>
  <div>
    <j-rate v-model:value="value1" />
    <span class="ant-rate-text">allowClear: true</span>
    <br />
    <j-rate v-model:value="value2" :allow-clear="false" />
    <span class="ant-rate-text">allowClear: false</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<number>(3);
    const value2 = ref<number>(3);
    return {
      value1,
      value2,
    };
  },
});
</script>
