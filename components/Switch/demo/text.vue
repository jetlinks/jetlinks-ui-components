<docs>
---
order: 2
title: 文字和图标
---

## zh-CN

带有文字和图标。

</docs>

<template>
  <div>
    <j-switch v-model:checked="checked1" checked-children="开" un-checked-children="关" />
    <br />
    <j-switch v-model:checked="checked2" checked-children="1" un-checked-children="0" />
    <br />
    <j-switch v-model:checked="checked3">
      <template #checkedChildren><check-outlined /></template>
      <template #unCheckedChildren><close-outlined /></template>
    </j-switch>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    CheckOutlined,
    CloseOutlined,
  },
  setup() {
    const state = reactive({
      checked1: true,
      checked2: false,
      checked3: false,
    });
    return { ...toRefs(state) };
  },
});
</script>
