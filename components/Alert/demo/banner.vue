<docs>
---
order: 6
title: 顶部公告
---

## zh-CN

最简单的用法，适用于简短的警告提示。

</docs>

<template>
  <a-alert message="Warning text" banner />
  <br />
  <a-alert
    message="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br />
  <a-alert :show-icon="false" message="Warning text without icon" banner />
  <br />
  <a-alert type="error" message="Error text" banner />
</template>
