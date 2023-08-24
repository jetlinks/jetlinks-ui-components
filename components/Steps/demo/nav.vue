<docs>
---
order: 10
title: 导航步骤
---

## zh-CN

导航类型的步骤条。

</docs>

<template>
  <div>
    <j-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <j-step
        title="Step 1"
        sub-title="00:00:05"
        status="finish"
        description="This is a description."
      />
      <j-step
        title="Step 2"
        sub-title="00:01:02"
        status="process"
        description="This is a description."
      />
      <j-step
        title="Step 3"
        sub-title="waiting for longlong time"
        status="wait"
        description="This is a description."
      />
    </j-steps>
    <j-steps v-model:current="current" type="navigation" :style="stepStyle">
      <j-step status="finish" title="Step 1" />
      <j-step status="process" title="Step 2" />
      <j-step status="wait" title="Step 3" />
      <j-step status="wait" title="Step 4" />
    </j-steps>
    <j-steps v-model:current="current" type="navigation" size="small" :style="stepStyle">
      <j-step status="finish" title="finish 1" />
      <j-step status="finish" title="finish 2" />
      <j-step status="process" title="current process" />
      <j-step status="wait" title="wait" disabled />
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
      stepStyle: {
        marginBottom: '60px',
        boxShadow: '0px -1px 0 0 #e8e8e8 inset',
      },
    };
  },
});
</script>
