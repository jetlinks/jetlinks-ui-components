<docs>
---
order: 0
title: 基础用法
---

通过 <code>height</code> 属性设置滚动条高度，若不设置则根据父容器高度自适应。

</docs>
<template>
  <j-scrollbar height="400">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </j-scrollbar>
</template>
<style scoped lang="less">
.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: #ecf5ff;
  color: #47a2ff;
}
</style>