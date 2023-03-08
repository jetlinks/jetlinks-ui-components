<docs>
---
order: 3
title: 步骤切换
---

## zh-CN

通常配合内容及按钮使用，表示一个流程的处理进度。

</docs>
<template>
  <div>
    <j-steps :current="current">
      <j-step v-for="item in steps" :key="item.title" :title="item.title" />
    </j-steps>
    <div class="steps-content">
      {{ steps[current].content }}
    </div>
    <div class="steps-action">
      <j-button v-if="current < steps.length - 1" type="primary" @click="next">Next</j-button>
      <j-button
        v-if="current == steps.length - 1"
        type="primary"
        @click="message.success('Processing complete!')"
      >
        Done
      </j-button>
      <j-button v-if="current > 0" style="margin-left: 8px" @click="prev">Previous</j-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { message } from 'ant-design-vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);
    const next = () => {
      current.value++;
    };
    const prev = () => {
      current.value--;
    };
    return {
      message,
      current,
      steps: [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ],
      next,
      prev,
    };
  },
});
</script>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}

[datj-theme='dark'] .steps-content {
  background-color: #2f2f2f;
  border: 1px dashed #404040;
}
</style>
