<docs>
---
order: 6
title: 自定义指示符
---

## zh-CN

使用自定义指示符。

</docs>

<template>
    <j-spin :indicator="indicator" />
</template>
<script lang="ts">
import { LoadingOutlined } from '@ant-design/icons-vue';
import { defineComponent, h } from 'vue';
export default defineComponent({
    setup() {
        const indicator = h(LoadingOutlined, {
            style: {
                fontSize: '24px',
            },
            spin: true,
        });
        return {
            indicator,
        };
    },
});
</script>
