<docs>
---
order: 7
title: 仪表盘
---

## zh-CN

通过设置 `type=dashboard`，可以很方便地实现仪表盘样式的进度条。若想要修改缺口的角度，可以设置 `gapDegree` 为你想要的值。

</docs>

<template>
    <div>
        <j-progress type="dashboard" :percent="75" />
    </div>
</template>
