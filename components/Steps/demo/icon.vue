<docs>
---
order: 2
title: 带图标的步骤条
---

## zh-CN

通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。

</docs>
<template>
  <j-steps>
    <j-step status="finish" title="Login">
      <template #icon>
        <user-outlined />
      </template>
    </j-step>
    <j-step status="finish" title="Verification">
      <template #icon>
        <solution-outlined />
      </template>
    </j-step>
    <j-step status="process" title="Pay">
      <template #icon>
        <loading-outlined />
      </template>
    </j-step>
    <j-step status="wait" title="Done">
      <template #icon>
        <smile-outlined />
      </template>
    </j-step>
  </j-steps>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    SolutionOutlined,
    LoadingOutlined,
    SmileOutlined,
  },
});
</script>
