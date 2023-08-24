<docs>
---
order: 2
title: 小型进度条
---

## zh-CN

适合放在较狭窄的区域内。

</docs>

<template>
    <div style="width: 170px">
        <j-progress :percent="30" size="small" />
        <j-progress :percent="50" size="small" status="active" />
        <j-progress :percent="70" size="small" status="exception" />
        <j-progress :percent="100" size="small" />
    </div>
</template>
