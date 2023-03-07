<docs>
---
order: 0
title: 进度条
---

## zh-CN

标准的进度条。

</docs>

<template>
    <j-progress :percent="30" />
    <j-progress :percent="50" status="active" />
    <j-progress :percent="70" status="exception" />
    <j-progress :percent="100" />
    <j-progress :percent="50" :show-info="false" />
</template>
