<docs>
---
order: 1
title: 位置
---

## zh-CN

位置有 12 个方向。

</docs>

<template>
    <div id="components-j-tooltip-demo-placement">
        <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
            <j-tooltip placement="topLeft">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>TL</j-button>
            </j-tooltip>
            <j-tooltip placement="top">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>Top</j-button>
            </j-tooltip>
            <j-tooltip placement="topRight">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>TR</j-button>
            </j-tooltip>
        </div>
        <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
            <j-tooltip placement="leftTop">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>LT</j-button>
            </j-tooltip>
            <j-tooltip placement="left">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>Left</j-button>
            </j-tooltip>
            <j-tooltip placement="leftBottom">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>LB</j-button>
            </j-tooltip>
        </div>
        <div
            :style="{
                width: `${buttonWidth}px`,
                marginLeft: `${buttonWidth * 4 + 24}px`,
            }"
        >
            <j-tooltip placement="rightTop">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>RT</j-button>
            </j-tooltip>
            <j-tooltip placement="right">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>Right</j-button>
            </j-tooltip>
            <j-tooltip placement="rightBottom">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>RB</j-button>
            </j-tooltip>
        </div>
        <div
            :style="{
                marginLeft: `${buttonWidth}px`,
                clear: 'both',
                whiteSpace: 'nowrap',
            }"
        >
            <j-tooltip placement="bottomLeft">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>BL</j-button>
            </j-tooltip>
            <j-tooltip placement="bottom">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>Bottom</j-button>
            </j-tooltip>
            <j-tooltip placement="bottomRight">
                <template #title>
                    <span>prompt text</span>
                </template>
                <j-button>BR</j-button>
            </j-tooltip>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        return {
            buttonWidth: 70,
        };
    },
});
</script>
<style scoped>
#components-j-tooltip-demo-placement .ant-btn {
    width: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
