<docs>
---
order: 3
title: 响应式
---

通过响应式的配置可以实现在小屏幕设备上的完美呈现。

</docs>

<template>
  <j-descriptions
    title="Responsive Descriptions"
    bordered
    :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
  >
    <j-descriptions-item label="Product">Cloud Database</j-descriptions-item>
    <j-descriptions-item label="Billing">Prepaid</j-descriptions-item>
    <j-descriptions-item label="Time">18:00:00</j-descriptions-item>
    <j-descriptions-item label="Amount">$80.00</j-descriptions-item>
    <j-descriptions-item label="Discount">$20.00</j-descriptions-item>
    <j-descriptions-item label="Official">$60.00</j-descriptions-item>
    <j-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
    </j-descriptions-item>
  </j-descriptions>
</template>
