<docs>
---
order: 4
title: 悬停点击弹出窗口
---

## zh-CN

以下示例显示如何创建可悬停和单击的弹出窗口。

</docs>
<template>
  <j-popover
    style="width: 500px"
    title="Hover title"
    trigger="hover"
    :visible="hovered"
    @visibleChange="handleHoverChange"
  >
    <template #content>
      <div>This is hover content.</div>
    </template>
    <j-popover
      title="Click title"
      trigger="click"
      :visible="clicked"
      @visibleChange="handleClickChange"
    >
      <template #content>
        <div>
          <div>This is click content.</div>
          <a @click="hide">Close</a>
        </div>
      </template>
      <j-button>Hover and click / 悬停并单击</j-button>
    </j-popover>
  </j-popover>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const clicked = ref<boolean>(false);
    const hovered = ref<boolean>(false);

    const hide = () => {
      clicked.value = false;
      hovered.value = false;
    };

    const handleHoverChange = (visible: boolean) => {
      clicked.value = false;
      hovered.value = visible;
    };

    const handleClickChange = (visible: boolean) => {
      clicked.value = visible;
      hovered.value = false;
    };

    return {
      clicked,
      hovered,
      hide,
      handleHoverChange,
      handleClickChange,
    };
  },
});
</script>
