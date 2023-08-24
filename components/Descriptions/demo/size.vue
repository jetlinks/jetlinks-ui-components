<docs>
---
order: 2
title: 自定义尺寸
---

自定义尺寸，适应在各种容器中展示。

</docs>

<template>
  <div>
    <j-radio-group v-model:value="size" @change="onChange">
      <j-radio value="default">default</j-radio>
      <j-radio value="middle">middle</j-radio>
      <j-radio value="small">small</j-radio>
    </j-radio-group>
    <br />
    <br />
    <j-descriptions bordered title="Custom Size" :size="size">
      <template #extra>
        <j-button type="primary">Edit</j-button>
      </template>
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
        <br />
      </j-descriptions-item>
    </j-descriptions>
    <br />
    <br />
    <j-descriptions title="Custom Size" :size="size">
      <template #extra>
        <j-button type="primary">Edit</j-button>
      </template>
      <j-descriptions-item label="Product">Cloud Database</j-descriptions-item>
      <j-descriptions-item label="Billing">Prepaid</j-descriptions-item>
      <j-descriptions-item label="Time">18:00:00</j-descriptions-item>
      <j-descriptions-item label="Amount">$80.00</j-descriptions-item>
      <j-descriptions-item label="Discount">$20.00</j-descriptions-item>
      <j-descriptions-item label="Official">$60.00</j-descriptions-item>
    </j-descriptions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DescriptionsProps } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const size = ref<DescriptionsProps['size']>('default');
    const onChange = (e: any) => {
      console.log('size checked', e.target.value);
      size.value = e.target.value;
    };

    return {
      size,
      onChange,
    };
  },
});
</script>
