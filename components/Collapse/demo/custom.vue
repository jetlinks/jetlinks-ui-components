<docs>
---
order: 4
title: 自定义面板
---

## zh-CN

自定义各个面板的背景色、圆角、边距和图标。

</docs>

<template>
  <j-collapse v-model:activeKey="activeKey" :bordered="false">
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <j-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
      <p>{{ text }}</p>
    </j-collapse-panel>
    <j-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
      <p>{{ text }}</p>
    </j-collapse-panel>
  </j-collapse>
</template>
<script lang="ts">
import { CaretRightOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    CaretRightOutlined,
  },
  setup() {
    const activeKey = ref(['1']);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
    const customStyle =
      'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';
    return {
      activeKey,
      text,
      customStyle,
    };
  },
});
</script>
