<docs>
---
order: 7
title: 支持更多内容配置
---

## zh-CN

一种支持封面、头像、标题和描述信息的卡片。

</docs>

<template>
  <j-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <j-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <j-avatar src="https://joeschmoe.io/api/v1/random" />
      </template>
    </j-card-meta>
  </j-card>
</template>

<script lang="ts">
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
});
</script>
