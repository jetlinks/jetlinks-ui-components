<docs>
---
order: 6
title: 额外节点
---

## zh-CN

可以同时展开多个面板，这个例子默认展开了第一个。

</docs>

<template>
  <j-collapse v-model:activeKey="activeKey" :expand-icon-position="expandIconPosition">
    <j-collapse-panel key="1" header="This is panel header 1">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </j-collapse-panel>
    <j-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </j-collapse-panel>
    <j-collapse-panel key="3" header="This is panel header 3" collapsible="disabled">
      <p>{{ text }}</p>
      <template #extra><setting-outlined @click="handleClick" /></template>
    </j-collapse-panel>
  </j-collapse>
  <br />
  <span>Expand Icon Position:</span>
  <j-select v-model:value="expandIconPosition">
    <j-select-option value="left">left</j-select-option>
    <j-select-option value="right">right</j-select-option>
  </j-select>
</template>
<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref, watch } from 'vue';
import type { CollapseProps } from 'ant-design-vue';

export default defineComponent({
  components: {
    SettingOutlined,
  },
  setup() {
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const activeKey = ref(['1']);
    const expandIconPosition = ref<CollapseProps['expandIconPosition']>('left');

    const handleClick = (event: MouseEvent) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };
    watch(activeKey, val => {
      console.log(val);
    });

    return {
      text,
      activeKey,
      expandIconPosition,
      handleClick,
    };
  },
});
</script>
