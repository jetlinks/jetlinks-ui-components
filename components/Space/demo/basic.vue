<docs>
---
order: 0
title: 基本用法
---

## zh-CN

相邻组件水平间距。

</docs>

<template>
  <j-space>
    Space
    <j-button type="primary">Button</j-button>
    <j-upload>
      <j-button>
        <UploadOutlined />
        Click to Upload
      </j-button>
    </j-upload>
    <j-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <j-button>Confirm</j-button>
    </j-popconfirm>
  </j-space>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
</script>
