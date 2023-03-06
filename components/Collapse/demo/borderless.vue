<docs>
---
order: 3
title: 简洁风格
---

## zh-CN

一套没有边框的简洁样式。

</docs>

<template>
  <j-collapse v-model:activeKey="activeKey" :bordered="false">
    <j-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </j-collapse-panel>
  </j-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const activeKey = ref(['1']);
    const text = `A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.`;
    return {
      activeKey,
      text,
    };
  },
});
</script>
