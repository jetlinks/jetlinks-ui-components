<docs>
---
order: 4
title: 多彩文字提示
---

## zh-CN

我们添加了多种预设色彩的文字提示样式，用作不同场景使用。

</docs>

<template>
    <div id="components-j-tooltip-demo-color">
        <j-divider orientation="left">Presets</j-divider>
        <div>
            <j-tooltip
                v-for="color in colors"
                :key="color"
                title="prompt text"
                :color="color"
            >
                <j-button>{{ color }}</j-button>
            </j-tooltip>
        </div>
        <j-divider orientation="left">Custom</j-divider>
        <div>
            <j-tooltip
                v-for="color in customColors"
                :key="color"
                title="prompt text"
                :color="color"
            >
                <j-button>{{ color }}</j-button>
            </j-tooltip>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];
const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];
export default defineComponent({
    setup() {
        return {
            colors,
            customColors,
        };
    },
});
</script>

<style scoped>
#components-j-tooltip-demo-color .ant-btn {
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>
