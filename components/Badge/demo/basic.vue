<docs>
---
order: 0
title: 基本
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

</docs>
<template>
  <j-badge count="5">
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-badge count="0" show-zero>
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-badge>
    <template #count>
      <clock-circle-outlined style="color: #f5222d" />
    </template>
    <j-avatar shape="square" size="large" />
  </j-badge>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ClockCircleOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
</script>
