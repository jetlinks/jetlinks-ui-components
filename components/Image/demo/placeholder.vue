<docs>
---
order: 1
title: 渐进加载
---

## zh-CN

大图使用 placeholder 渐进加载。

</docs>

<template>
  <j-space :size="12">
    <j-image
      :width="200"
      :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`"
    >
      <template #placeholder>
        <j-image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          :width="200"
          :preview="false"
        />
      </template>
    </j-image>
    <j-button type="primary" @click="random = Date.now()">reload</j-button>
  </j-space>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      random: ref(),
    };
  },
});
</script>
