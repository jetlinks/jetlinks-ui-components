<docs>
---
order: 1
title: 横向滚动
---

当元素宽度大于滚动条宽度时，会显示横向滚动条。

</docs>
<template>
  <j-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </j-scrollbar>
</template>
<style scoped lang="less">
.scrollbar-flex-content {
  display: flex;
  .scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: #fef0f0;
    color: #f56c6c;
  }
}
</style>