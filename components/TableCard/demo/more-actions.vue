<docs>
---
order: 4
title: 更多按钮
---

以省略形式展示更多按钮。
</docs>
<template>
  <j-table-card 
    name="更多按钮"
    width="400px"
    :actions="actions"
    :moreActions="moreActions"
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
        {name: '按钮2', icon: 'StopOutlined', onClick: () => {}},
      ])

      const moreActions = reactive([
        {name: '按钮3', icon: 'DeleteOutlined', onClick: () => {}},
        {name: '按钮4', icon: 'EditOutlined', onClick: () => {}},
      ])
      return {
        status,
        actions,
        moreActions
      }
    }
  })
</script>