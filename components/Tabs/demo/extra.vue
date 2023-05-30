<docs>
---
order: 1
title: 附加内容
---

可以在标签页左、中、右边添加附加内容。
</docs>

<template>
  <j-tabs v-model:activeKey="activeKey">
    <j-tab-pane key="1" tab="Tab 1">Content of tab 1</j-tab-pane>
    <j-tab-pane key="2" tab="Tab 2">Content of tab 2</j-tab-pane>
    <j-tab-pane key="3" tab="Tab 3">Content of tab 3</j-tab-pane>
    <template #leftExtra>
      <a-button class="tabs-extra-demo-button">Left Extra Action</a-button>
    </template>
    <template #rightExtra>
      <a-button>Right Extra Action</a-button>
    </template>
    <template #centerExtra>
      <div class="default-content">
        <j-aIcon type="QuestionCircleOutlined" />
        <span>中间扩展内容</span>
      </div>
    </template>
  </j-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>

<style>
.default-content{
  margin-left: 20px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 100%;
  display:flex;
  align-items: center;
}
.tabs-extra-demo-button {
  margin-right: 16px;
}

.ant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}
</style>