<docs>
---
order: 2
title: 面板嵌套
---

## zh-CN

嵌套折叠面板。

</docs>

<template>
  <j-collapse v-model:activeKey="activeKey" @change="changeActivekey">
    <j-collapse-panel key="1" header="This is panel header 1">
      <j-collapse default-active-key="4">
        <j-collapse-panel key="4" header="This is panel nest panel">
          <p>{{ text }}</p>
        </j-collapse-panel>
      </j-collapse>
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
    const activeKey = ref([]);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

    const changeActivekey = (key: string) => {
      console.log(key);
    };

    return {
      activeKey,
      text,
      changeActivekey,
    };
  },
});
</script>
