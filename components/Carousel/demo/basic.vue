<docs>
---
order: 0
title: 基本
---

## zh-CN

最简单的用法。

</docs>

<template>
  <j-carousel :after-change="onChange">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </j-carousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
    };
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
```
