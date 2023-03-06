<docs>
---
order: 4
title: 栅格卡片
---

## zh-CN

在系统概览页面常常和栅格进行配合。

</docs>

<template>
  <div style="background-color: #ececec; padding: 20px">
    <j-row :gutter="16">
      <j-col :span="8">
        <j-card title="Card title" :bordered="false">
          <p>card content</p>
        </j-card>
      </j-col>
      <j-col :span="8">
        <j-card title="Card title" :bordered="false">
          <p>card content</p>
        </j-card>
      </j-col>
      <j-col :span="8">
        <j-card title="Card title" :bordered="false">
          <p>card content</p>
        </j-card>
      </j-col>
    </j-row>
  </div>
</template>
