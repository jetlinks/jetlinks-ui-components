<docs>
---
order: 2
title: 滚动容器
---

## zh-CN

用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。

</docs>

<template>
  <div id="components-affix-demo-target" ref="containerRef" class="scrollable-container">
    <div class="background">
      <j-affix :target="() => containerRef">
        <j-button type="primary">Fixed at the top of container</j-button>
      </j-affix>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const containerRef = ref();
    return {
      containerRef,
    };
  },
});
</script>
<style>
#components-affix-demo-target.scrollable-container {
  height: 100px;
  overflow-y: scroll;
}
#components-affix-demo-target .background {
  padding-top: 60px;
  height: 300px;
  background-image: url('https://zos.alipayobjects.com/rmsportal/RmjwQiJorKyobvI.jpg');
}
</style>
