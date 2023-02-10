<docs>
---
order: 1
title: 基本使用
---

</docs>
<template>
  <div class="content">
    <j-pro-layout
        v-bind="state"
        style="min-height: 600px"
    >

    </j-pro-layout>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  name: "Basic",
  setup() {
    const state = reactive({
      menuData: [],

    })

    return {
      state
    }
  }
}
</script>
<style lang="less">
.content {
  min-height: 600px;
  >div {
    min-height: 100%;
  }
}
</style>
