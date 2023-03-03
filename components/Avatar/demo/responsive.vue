<docs>
---
order: 5
title: 响应式尺寸
---

## zh-CN

头像大小可以根据屏幕大小自动调整。

</docs>

<template>
  <j-avatar :size="{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }">
    <template #icon>
      <AntDesignOutlined />
    </template>
  </j-avatar>
</template>

<script lang="ts">
import { AntDesignOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    AntDesignOutlined,
  },
});
</script>
