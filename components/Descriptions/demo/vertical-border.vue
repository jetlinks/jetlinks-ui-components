<docs>
---
order: 5
title: 垂直带边框的
---

垂直带边框和背景颜色的列表。

</docs>

<template>
  <j-descriptions title="User Info" layout="vertical" bordered>
    <j-descriptions-item label="Product">Cloud Database</j-descriptions-item>
    <j-descriptions-item label="Billing Mode">Prepaid</j-descriptions-item>
    <j-descriptions-item label="Automatic Renewal">YES</j-descriptions-item>
    <j-descriptions-item label="Order time">2018-04-24 18:00:00</j-descriptions-item>
    <j-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</j-descriptions-item>
    <j-descriptions-item label="Status" :span="3">
      <a-badge status="processing" text="Running" />
    </j-descriptions-item>
    <j-descriptions-item label="Negotiated Amount">$80.00</j-descriptions-item>
    <j-descriptions-item label="Discount">$20.00</j-descriptions-item>
    <j-descriptions-item label="Official Receipts">$60.00</j-descriptions-item>
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
      <br />
    </j-descriptions-item>
  </j-descriptions>
</template>
