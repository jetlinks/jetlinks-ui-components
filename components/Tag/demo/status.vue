<docs>
---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

</docs>

<template>
  <j-divider orientation="left">Without icon</j-divider>
  <div>
    <j-tag color="success">success</j-tag>
    <j-tag color="processing">processing</j-tag>
    <j-tag color="error">error</j-tag>
    <j-tag color="warning">warning</j-tag>
    <j-tag color="default">default</j-tag>
  </div>
  <j-divider orientation="left">With icon</j-divider>
  <div>
    <j-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      success
    </j-tag>
    <j-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      processing
    </j-tag>
    <j-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      error
    </j-tag>
    <j-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      warning
    </j-tag>
    <j-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      waiting
    </j-tag>
    <j-tag color="default">
      <template #icon>
        <minus-circle-outlined />
      </template>
      stop
    </j-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  },
});
</script>
