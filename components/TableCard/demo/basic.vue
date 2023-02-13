<docs>
---
order: 4
title: 基本用法
---

卡片形式的表格。
</docs>
<template>
  <j-table-card 
    name="卡片标题"
    width="400px"
    :actions="actions"
    :status="status"
  >
    <template #content>
      中间内容
    </template>
  </j-table-card>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    setup() {
      const status = reactive({
        text: '正常',
        value: 'normal',
        color: '#00ff00'
      })

      const actions = reactive([
        {name: '按钮1', icon: 'EditOutlined', onClick: () => {}},
        {name: '按钮2', onClick: () => {}},
      ])
      return {
        status,
        actions,
      }
    }
  })
</script>