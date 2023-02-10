<docs>
---
order: 1
title: 卡片加载中
---

可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态。

</docs>
<template>
    <j-spin :spinning="spinning">
      <a-alert
        message="Alert message title"
        description="Further details about the context of this alert."
      ></a-alert>
    </j-spin>
    <div class="spin-state">
      Loading state：
      <a-switch v-model:checked="spinning" />
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    setup() {
      const spinning = ref<boolean>(false);
  
      const changeSpinning = () => {
        spinning.value = !spinning.value;
      };
  
      return {
        spinning,
        changeSpinning,
      };
    },
  });
  </script>
  <style scoped>
  .spin-state {
    margin-top: 16px;
  }
  </style>
  

