<docs>
---
order: 6
iframe: 228
title: 响应式
---

## zh-CN

在不同大小的屏幕下，应该有不同的表现。

</docs>

<template>
  <div class="components-page-header-demo-responsive" style="border: 1px solid rgb(235, 237, 240)">
    <j-page-header title="Title" sub-title="This is a subtitle" @back="() => $router.go(-1)">
      <template #extra>
        <j-button key="3">Operation</j-button>
        <j-button key="2">Operation</j-button>
        <j-button key="1" type="primary">Primary</j-button>
      </template>
      <template #footer>
        <j-tabs>
          <j-tab-pane key="1" tab="Details" />
          <j-tab-pane key="2" tab="Rule" />
        </j-tabs>
      </template>
      <div class="content">
        <div class="main">
          <j-descriptions size="small" :column="2">
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
        </div>
        <div class="extra">
          <div
            :style="{
              display: 'flex',
              width: 'max-content',
              justifyContent: 'flex-end',
            }"
          >
            <j-statistic
              title="Status"
              value="Pending"
              :style="{
                marginRight: '32px',
              }"
            />
            <j-statistic title="Price" prefix="$" :value="568.08" />
          </div>
        </div>
      </div>
    </j-page-header>
  </div>
</template>
<style>
.components-page-header-demo-responsive {
  padding-bottom: 20px;
}
.components-page-header-demo-responsive tr:last-child td {
  padding-bottom: 0;
}
#components-page-header-demo-responsive .content {
  display: flex;
}
#components-page-header-demo-responsive .ant-statistic-content {
  font-size: 20px;
  line-height: 28px;
}
@media (max-width: 576px) {
  #components-page-header-demo-responsive .content {
    display: block;
  }

  #components-page-header-demo-responsive .main {
    width: 100%;
    margin-bottom: 12px;
  }

  #components-page-header-demo-responsive .extra {
    width: 100%;
    margin-left: 0;
    text-align: left;
  }
}
</style>
