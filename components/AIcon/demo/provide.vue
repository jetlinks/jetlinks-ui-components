<docs>
---
order: 6
title: 全局scriptUrl
---

ConfigProvider
</docs>
<template>
    <ConfigProvider
        :IconConfig="{
            scriptUrl: '//at.alicdn.com/t/c/font_4035907_9odtvgi89pn.js',
        }"
    >
        <AIcon type="icon-a-kaipiaoxinxi7" />
    </ConfigProvider>
</template>

<script setup>
import { ConfigProvider, AIcon } from '../../components';
</script>
