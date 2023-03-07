<docs>
---
order: 3
title: 自动调整位置
---

## zh-CN

气泡框不可见时自动调整位置。

</docs>

<template>
    <div :style="wrapStyles">
        <j-tooltip
            placement="left"
            title="Prompt Text"
            :get-popup-container="getPopupContainer"
        >
            <j-button>Adjust automatically / 自动调整</j-button>
        </j-tooltip>
        <br />
        <j-tooltip
            placement="left"
            title="Prompt Text"
            :get-popup-container="getPopupContainer"
            :auto-adjust-overflow="false"
        >
            <j-button style="margin-top: 10px">Ingore / 不处理</j-button>
        </j-tooltip>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
const wrapStyles: Record<string, string> = {
    overflow: 'hidden',
    position: 'relative',
    padding: '24px',
    border: '1px solid #e9e9e9',
};
export default defineComponent({
    setup() {
        const getPopupContainer = (trigger: HTMLElement) => {
            return trigger.parentElement;
        };

        return {
            wrapStyles,
            getPopupContainer,
        };
    },
});
</script>
