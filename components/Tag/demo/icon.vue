<docs>
---
order: 6
title: 图标按钮
---

## zh-CN

当需要在 `Tag` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Tag` 内使用 `Icon` 组件。
如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。

</docs>

<template>
  <j-tag color="#55acee">
    <template #icon>
      <twitter-outlined />
    </template>
    Twitter
  </j-tag>
  <j-tag color="#cd201f">
    <template #icon>
      <youtube-outlined />
    </template>
    Youtube
  </j-tag>
  <j-tag color="#3b5999">
    <template #icon>
      <facebook-outlined />
    </template>
    Facebook
  </j-tag>
  <j-tag color="#55acee">
    <template #icon>
      <linkedin-outlined />
    </template>
    LinkedIn
  </j-tag>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    TwitterOutlined,
    YoutubeOutlined,
    FacebookOutlined,
    LinkedinOutlined,
  },
});
</script>
