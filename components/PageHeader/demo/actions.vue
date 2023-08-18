<docs>
---
order: 5
title: 多种形态的 PageHeader
---

## zh-CN

使用操作区，并自定义子节点，适合使用在需要展示一些复杂的信息，帮助用户快速了解这个页面的信息和操作。

</docs>

<template>
  <div>
    <j-page-header
      class="demo-page-header"
      style="border: 1px solid rgb(235, 237, 240)"
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
    <br />
    <j-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #tags>
        <j-tag color="blue">Running</j-tag>
      </template>
      <template #extra>
        <j-button key="3">Operation</j-button>
        <j-button key="2">Operation</j-button>
        <j-button key="1" type="primary">Primary</j-button>
      </template>
      <j-row type="flex">
        <j-statistic title="Status" value="Pending" />
        <j-statistic
          title="Price"
          prefix="$"
          :value="568.08"
          :style="{
            margin: '0 32px',
          }"
        />
        <j-statistic title="Balance" prefix="$" :value="3345.08" />
      </j-row>
    </j-page-header>
  </div>
</template>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
