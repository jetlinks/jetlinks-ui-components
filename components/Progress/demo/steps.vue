<docs>
---
order: 12
title: 步骤进度条
---

## zh-CN

带步骤的进度条。

</docs>

<template>
    <j-progress :percent="50" :steps="3" />
    <br />
    <j-progress :percent="30" :steps="5" />
    <br />
    <j-progress :percent="100" :steps="5" size="small" stroke-color="#52c41a" />
</template>
