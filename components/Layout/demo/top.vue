<docs>
---
order: 1
title: 上中下布局
---

最基本的『上-中-下』布局。<br>
一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

</docs>
<template>
    <j-layout class="layout">
        <j-layout-header>
            <div class="logo" />
            <j-menu
                v-model:selectedKeys="selectedKeys"
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
            >
                <j-menu-item key="1">nav 1</j-menu-item>
                <j-menu-item key="2">nav 2</j-menu-item>
                <j-menu-item key="3">nav 3</j-menu-item>
            </j-menu>
        </j-layout-header>
        <j-layout-content style="padding: 0 50px">
            <j-breadcrumb style="margin: 16px 0">
                <j-breadcrumb-item>Home</j-breadcrumb-item>
                <j-breadcrumb-item>List</j-breadcrumb-item>
                <j-breadcrumb-item>App</j-breadcrumb-item>
            </j-breadcrumb>
            <div
                :style="{
                    background: '#fff',
                    padding: '24px',
                    minHeight: '280px',
                }"
            >
                Content
            </div>
        </j-layout-content>
        <j-layout-footer style="text-align: center">
            Ant Design ©2018 Created by Ant UED
        </j-layout-footer>
    </j-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        return {
            selectedKeys: ref<string[]>(['2']),
        };
    },
});
</script>
<style>
.site-layout-content {
    min-height: 280px;
    padding: 24px;
    background: #fff;
}
.logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}
.ant-row-rtl .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

[data-theme='dark'] .site-layout-content {
    background: #141414;
}
</style>
