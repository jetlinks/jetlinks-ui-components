<docs>
---
order: 9
title: 加载中状态
---

## zh-CN

添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。

</docs>

<template>
  <j-space direction="vertical">
    <j-dropdown-button type="primary" loading>
      <template #overlay>
        <j-menu>
          <j-menu-item key="1">Submit and continue</j-menu-item>
        </j-menu>
      </template>
      Submit
    </j-dropdown-button>
    <j-dropdown-button type="primary" size="small" loading>
      <template #overlay>
        <j-menu>
          <j-menu-item key="1">Submit and continue</j-menu-item>
        </j-menu>
      </template>
      Submit
    </j-dropdown-button>
    <j-dropdown-button type="primary" :loading="loading1" @click="enterLoading1">
      <template #overlay>
        <j-menu>
          <j-menu-item key="1">Submit and continue</j-menu-item>
        </j-menu>
      </template>
      Submit
    </j-dropdown-button>
    <j-dropdown-button :loading="loading2" @click="enterLoading2">
      Submit
      <template #overlay>
        <j-menu>
          <j-menu-item key="1">Submit and continue</j-menu-item>
        </j-menu>
      </template>
      <template #icon><DownOutlined /></template>
    </j-dropdown-button>
  </j-space>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const loading1 = ref(false);
    const loading2 = ref(false);
    const enterLoading = (loading: Ref<boolean>) => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
      }, 6000);
    };
    return {
      loading1,
      loading2,
      enterLoading1() {
        enterLoading(loading1);
      },
      enterLoading2() {
        enterLoading(loading2);
      },
    };
  },
});
</script>
