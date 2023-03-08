<docs>
---
order: 0
title: 折叠面板
---

## zh-CN

可以同时展开多个面板，这个例子默认展开了第一个。

</docs>

<template>
  <j-collapse v-model:activeKey="activeKey">
    <j-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
      <p>{{ text }}</p>
    </j-collapse-panel>
  </j-collapse>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(['1']);

    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
    };
  },
});
</script>
