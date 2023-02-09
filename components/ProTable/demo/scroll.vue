<docs>
---
order: 3
title: 滚动表格
---

简单的表格，最后一列是各种操作

</docs>
<template>
  <j-pro-table 
    type="SCROLL"
    :data-source="data"
  >
    <template #card="slotProps">
      <div style="width: 100%">
        <a-card style="width: 100%">
          <h4>名称： {{slotProps?.name}}</h4>
          <p>年龄： {{slotProps?.age}}</p>
        </a-card>
      </div>
    </template>
  </j-pro-table>
</template>


<script lang="ts">
import { random } from 'lodash';
import { defineComponent } from 'vue';

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
      data
    };
  },
});
</script>



