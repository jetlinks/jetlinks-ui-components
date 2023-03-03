<docs>
---
order: 3
title: 填底的按钮样式
---

## zh-CN

实色填底的单选按钮样式。

</docs>
<template>
  <div>
    <div>
      <j-radio-group v-model:value="value1" button-style="solid">
        <j-radio-button value="a">Hangzhou</j-radio-button>
        <j-radio-button value="b">Shanghai</j-radio-button>
        <j-radio-button value="c">Beijing</j-radio-button>
        <j-radio-button value="d">Chengdu</j-radio-button>
      </j-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <j-radio-group v-model:value="value2" button-style="solid">
        <j-radio-button value="a">Hangzhou</j-radio-button>
        <j-radio-button value="b" disabled>Shanghai</j-radio-button>
        <j-radio-button value="c">Beijing</j-radio-button>
        <j-radio-button value="d">Chengdu</j-radio-button>
      </j-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('c');
    return {
      value1,
      value2,
    };
  },
});
</script>
