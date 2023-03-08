<docs>
---
order: 1
title: 自定义样式
---

## zh-CN

可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。

</docs>

<template>
    <div id="components-back-top-demo-custom">
        <j-back-top>
            <div class="ant-back-top-inner">UP</div>
        </j-back-top>
        Scroll down to see the bottom-right
        <strong style="color: #1088e9">blue</strong>
        button.
    </div>
</template>

<style scoped>
#components-back-top-demo-custom .ant-back-top {
    bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #1088e9;
    color: #fff;
    text-align: center;
    font-size: 20px;
}
</style>
