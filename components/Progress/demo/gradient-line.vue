<docs>
---
order: 10
title: 自定义进度条渐变色
---

## zh-CN

`linear-gradient` 的封装。推荐只传两种颜色。

</docs>

<template>
    <div>
        <j-progress
            :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
            }"
            :percent="99.9"
        />
        <j-progress
            :stroke-color="{
                from: '#108ee9',
                to: '#87d068',
            }"
            :percent="99.9"
            status="active"
        />
        <j-progress
            type="circle"
            :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
            }"
            :percent="90"
        />
        <j-progress
            type="circle"
            :stroke-color="{
                '0%': '#108ee9',
                '100%': '#87d068',
            }"
            :percent="100"
        />
    </div>
</template>
