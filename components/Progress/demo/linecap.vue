<docs>
---
order: 9
title: 圆角/方角边缘
---

## zh-CN

`strokeLinecap="square|round"` 可以调整进度条边缘的形状。

</docs>

<template>
    <div>
        <j-progress stroke-linecap="square" :percent="75" />
        <j-progress stroke-linecap="square" :percent="75" type="circle" />
        <j-progress stroke-linecap="square" :percent="75" type="dashboard" />
    </div>
</template>
