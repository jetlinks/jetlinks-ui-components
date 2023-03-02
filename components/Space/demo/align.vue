<docs>
---
order: 3
title: 对齐
---

## zh-CN

设置对齐模式。

</docs>

<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <j-space align="center">
        center
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </j-space>
    </div>
    <div class="space-align-block">
      <j-space align="start">
        start
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </j-space>
    </div>
    <div class="space-align-block">
      <j-space align="end">
        end
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </j-space>
    </div>
    <div class="space-align-block">
      <j-space align="baseline">
        baseline
        <a-button type="primary">Primary</a-button>
        <span class="mock-block">Block</span>
      </j-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
