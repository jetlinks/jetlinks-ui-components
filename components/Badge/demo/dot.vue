<docs>
---
order: 3
title: 讨嫌的小红点
---

## zh-CN

没有具体的数字。

</docs>

<template>
  <j-badge dot>
    <notification-outlined style="font-size: 16px" />
  </j-badge>
  <j-badge dot>
    <a href="#">Link something</a>
  </j-badge>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { NotificationOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    NotificationOutlined,
  },
});
</script>
