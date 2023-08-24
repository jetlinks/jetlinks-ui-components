<docs>
---
order: 7
title: 多彩徽标
---

## zh-CN

1.5.0 后新增。我们添加了多种预设色彩的徽标样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

</docs>

<template>
  <h4 style="margin-bottom: 16px">Presets:</h4>
  <div>
    <div v-for="color in colors" :key="color">
      <j-badge :color="color" :text="color" />
    </div>
  </div>
  <j-divider orientation="left">Custom</j-divider>
  <j-badge color="#f50" text="#f50" />
  <br />
  <j-badge color="#2db7f5" text="#2db7f5" />
  <br />
  <j-badge color="#87d068" text="#87d068" />
  <br />
  <j-badge color="#108ee9" text="#108ee9" />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];
export default defineComponent({
  setup() {
    return {
      colors,
    };
  },
});
</script>
