<docs>
---
order: 6
title: 自定义文字格式
---

## zh-CN

`format` 属性指定格式。

</docs>

<template>
    <div>
        <j-progress
            type="circle"
            :percent="75"
            :format="(percent) => `${percent} Days`"
        />
        <j-progress type="circle" :percent="100" :format="() => 'Done'" />
        <j-progress type="circle" :percent="75">
            <template #format="percent">
                <span style="color: red">{{ percent }}</span>
            </template>
        </j-progress>
    </div>
</template>
