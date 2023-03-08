<docs>
---
order: 2
title: 箭头指向
---

## zh-CN

设置了 `arrowPointAtCenter` 后，箭头将指向目标元素的中心。

</docs>

<template>
    <j-space>
        <j-tooltip placement="topLeft" title="Prompt Text">
            <j-button>Align edge / 边缘对齐</j-button>
        </j-tooltip>
        <j-tooltip
            placement="topLeft"
            title="Prompt Text"
            arrow-point-at-center
        >
            <j-button disabled>Arrow points to center / 箭头指向中心</j-button>
        </j-tooltip>
    </j-space>
</template>
