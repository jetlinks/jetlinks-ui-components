<docs>
---
order: 8
iframe: 600
iframePath: fixed-header
title: 固定头部
---

## zh-CN

一般用于固定顶部导航，方便页面切换。

</docs>
<template>
    <j-layout>
        <j-layout-header
            :style="{ position: 'fixed', zIndex: 1, width: '100%' }"
        >
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
        <j-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <j-breadcrumb :style="{ margin: '16px 0' }">
                <j-breadcrumb-item>Home</j-breadcrumb-item>
                <j-breadcrumb-item>List</j-breadcrumb-item>
                <j-breadcrumb-item>App</j-breadcrumb-item>
            </j-breadcrumb>
            <div
                :style="{
                    background: '#fff',
                    padding: '24px',
                    minHeight: '380px',
                }"
            >
                Content
            </div>
        </j-layout-content>
        <j-layout-footer :style="{ textAlign: 'center' }">
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
#components-layout-demo-fixed .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
}
.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}
</style>
