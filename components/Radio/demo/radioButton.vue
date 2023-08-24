<docs>
---
order: 2
title: 按钮样式
---

## zh-CN

按钮样式的单选组合。

</docs>
<template>
  <div>
    <div>
      <j-radio-group v-model:value="value1">
        <j-radio-button value="a">Hangzhou</j-radio-button>
        <j-radio-button value="b">Shanghai</j-radio-button>
        <j-radio-button value="c">Beijing</j-radio-button>
        <j-radio-button value="d">Chengdu</j-radio-button>
      </j-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <j-radio-group v-model:value="value2">
        <j-radio-button value="a">Hangzhou</j-radio-button>
        <j-radio-button value="b" disabled>Shanghai</j-radio-button>
        <j-radio-button value="c">Beijing</j-radio-button>
        <j-radio-button value="d">Chengdu</j-radio-button>
      </j-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <j-radio-group v-model:value="value3" disabled>
        <j-radio-button value="a">Hangzhou</j-radio-button>
        <j-radio-button value="b">Shanghai</j-radio-button>
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
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');

    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
