<docs>
---
order: 1
title: 固定状态改变的回调
---

## zh-CN

可以获得是否固定的状态。

</docs>

<template>
  <j-affix :offset-top="120" @change="change">
    <j-button>120px to affix top</j-button>
  </j-affix>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const change = (affixed: boolean) => {
      console.log(affixed);
    };

    return {
      change,
    };
  },
});
</script>
