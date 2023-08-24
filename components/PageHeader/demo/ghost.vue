<docs>
---
order: 2
title: 白底模式
---

## zh-CN

默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。

</docs>

<template>
  <div class="demo-page-header" style="background-color: #f5f5f5; padding: 24px">
    <j-page-header
      :ghost="false"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <j-button key="3">Operation</j-button>
        <j-button key="2">Operation</j-button>
        <j-button key="1" type="primary">Primary</j-button>
      </template>
      <j-descriptions size="small" :column="3">
        <j-descriptions-item label="Created">Lili Qu</j-descriptions-item>
        <j-descriptions-item label="Association">
          <a>421421</a>
        </j-descriptions-item>
        <j-descriptions-item label="Creation Time">2017-01-10</j-descriptions-item>
        <j-descriptions-item label="Effective Time">2017-10-10</j-descriptions-item>
        <j-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </j-descriptions-item>
      </j-descriptions>
    </j-page-header>
  </div>
</template>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
