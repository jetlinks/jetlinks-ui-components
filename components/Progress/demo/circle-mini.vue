<docs>
---
order: 3
title: 小型进度圈
---

## zh-CN

小一号的圈形进度。

</docs>

<template>
    <j-progress type="circle" :percent="30" :width="80" />
    <j-progress type="circle" :percent="70" :width="80" status="exception" />
    <j-progress type="circle" :percent="100" :width="80" />
</template>
