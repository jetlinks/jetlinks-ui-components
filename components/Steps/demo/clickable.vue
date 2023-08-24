<docs>
---
order: 9
title: 可点击
---

## zh-CN

设置 `v-model` 后，Steps 变为可点击状态。

</docs>

<template>
  <div>
    <j-steps v-model:current="current">
      <j-step title="Step 1" description="This is a description." />
      <j-step title="Step 2" description="This is a description." />
      <j-step title="Step 3" description="This is a description." />
    </j-steps>
    <j-divider />
    <j-steps v-model:current="current" direction="vertical">
      <j-step title="Step 1" description="This is a description." />
      <j-step title="Step 2" description="This is a description." />
      <j-step title="Step 3" description="This is a description." />
    </j-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
    };
  },
});
</script>
