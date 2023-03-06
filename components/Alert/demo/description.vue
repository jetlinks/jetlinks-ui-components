<docs>
---
order: 3
title: 含有辅助性文字介绍
---

## zh-CN

含有辅助性文字介绍的警告提示。

</docs>

<template>
  <a-alert message="Success Text" type="success">
    <template #description>
      <p>
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </a-alert>
  <a-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <a-alert
    message="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
</template>
