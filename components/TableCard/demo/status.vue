<docs>
---
order: 4
title: 卡片状态
---

卡片的不同状态, 自有五种状态success, error, warn, default, processing, 可自定义颜色(十六进制)。
</docs>
<template>
  <div class="table-card-list">
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="success"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="error"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="warn"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="defaults"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="processing"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
    <j-table-card 
      name="卡片标题"
      width="400px"
      :actions="actions"
      :status="customize"
    >
      <template #content>
        中间内容
      </template>
    </j-table-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  export default defineComponent({
    setup() {
      const success = reactive({
        text: '正常',
        value: 'success',
      })
      const warn = reactive({
        text: '告警',
        value: 'warn',
      })
      const defaults = reactive({
        text: '默认',
        value: 'default',
      })
      const error = reactive({
        text: '错误',
        value: 'error',
      })
      const processing = reactive({
        text: '进行中',
        value: 'processing',
      })

      const customize = reactive({
        text: '自定义',
        value: 'customize',
        color: '#ff00ff'
      })
      const actions = reactive([
        {name: '按钮1', icon: 'EditOutlined', onClick: () => {}},
        {name: '按钮2', icon: 'StopOutlined', onClick: () => {}},
      ])
      return {
        success,
        warn,
        defaults,
        error,
        processing,
        customize,
        actions,
      }
    }
  })
</script>

<style>
.table-card-list {
  width: 100%;
  display: grid;
  justify-content: start;
  grid-gap: 24px 20px;
  grid-template-columns: repeat(auto-fill, 400px);
}
</style>