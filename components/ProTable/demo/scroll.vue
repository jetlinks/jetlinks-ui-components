<docs>
---
order: 3
title: 滚动表格
---

简单的表格，最后一列是各种操作

</docs>
<template>
  <div class="box">
    <j-pro-table 
        type="SCROLL"
        :request="query"
        :params="searchParams"
    >
        <template #prev>
            <div style="width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; border: 1px solid lightgray">
                <h1 style="font-size: 25px;">+</h1>
            </div>
        </template>
        <template #card="slotProps">
            <div style="width: 150px; height: 150px; display: flex; align-items: center; justify-content: center; border: 1px solid lightgray">
                <h1 style="font-size: 25px;">{{slotProps?.name}}</h1>
            </div>
        </template>
    </j-pro-table>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';

const searchParams = reactive<Record<string, any>>({
  current: 1,
  pageIndex: 0,
  pageSize: 25,
  terms: [],
  sorts: [{name: 'createTime', order: 'desc'}]
})

const query = (params: Record<string, any>) => new Promise((resolve) => {
    console.log(params)
  const data = Array(100).fill(1).map((item, index) => {
    return {
      key: index + item,
      name: index + item
    }
  })
  const _from = params.pageIndex * params.pageSize;
  const _to = (params.pageIndex + 1)* params.pageSize 
  setTimeout(() => {
    resolve({
      result: {
        data: data.slice(_from, _to),
        pageIndex: params.pageIndex || 0,
        pageSize: params.pageSize || 12,
        total: data.length
      },
      status: 200
      
    })
  }, 500)
})

export default defineComponent({
  setup() {
    return {
      query
    };
  },
});
</script>

<style lang="less" scoped>
.box {
    height: 500px;
    overflow-y: auto;
}
</style>



