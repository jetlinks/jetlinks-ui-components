<docs>
---
order: 5
title: 动态
---

## zh-CN

展示动态变化的效果。

</docs>

<template>
  <div>
    <j-badge :count="count">
      <j-avatar shape="square" size="large" />
    </j-badge>
    <j-button-group>
      <j-button @click="decline">
        <minus-outlined />
      </j-button>
      <j-button @click="increase">
        <plus-outlined />
      </j-button>
    </j-button-group>
  </div>
  <j-divider />
  <j-badge :dot="show">
    <j-avatar shape="square" size="large" />
  </j-badge>
  <j-switch v-model:checked="show" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const count = ref<number>(5);
    const decline = () => {
      if (count.value >= 1) {
        count.value--;
      }
    };

    const increase = () => {
      count.value++;
    };
    return {
      count,
      show: ref<boolean>(true),
      decline,
      increase,
    };
  },
});
</script>
