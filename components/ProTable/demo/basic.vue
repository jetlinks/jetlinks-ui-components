<docs>
---
order: 0
title: 基本
---

简单的表格，最后一列是各种操作

</docs>
<template>
  <j-pro-table 
    :columns="columns" 
    :data-source="data" 
    :noPagination="true"
  >
    <template #headerTitle><a-button type="primary">新增</a-button></template>
    <template #rightExtraRender><a-button>批量操作</a-button></template>
    <template #card="slotProps">
      <div style="width: 100%">
        <a-card style="width: 100%">
          <h4>名称： {{slotProps?.name}}</h4>
          <p>年龄： {{slotProps?.age}}</p>
        </a-card>
      </div>
    </template>
    <template #address="slotProps">
      <a>{{slotProps?.address}}</a>
    </template>
  </j-pro-table>
</template>


<script lang="ts">
import { random } from 'lodash';
import { defineComponent } from 'vue';
const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
    key: 'address',
    scopedSlots: true
  }
];

const data = Array(10).fill(1).map((item, index) => {
  return {
    key: index + item,
    name: 'John Brown',
    age: random(100),
    address: 'New York No. 1 Lake Park',
  }
})

export default defineComponent({
  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>



