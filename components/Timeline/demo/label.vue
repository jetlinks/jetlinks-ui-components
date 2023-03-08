<docs>
---
order: 5
title: 标签
---

## zh-CN

使用 `label` 标签单独展示时间。

</docs>

<template>
    <j-radio-group v-model:value="mode" style="margin-bottom: 20px">
        <j-radio value="left">Left</j-radio>
        <j-radio value="right">Right</j-radio>
        <j-radio value="alternate">Alternate</j-radio>
    </j-radio-group>
    <j-timeline :mode="mode">
        <j-timeline-item label="2015-09-01">Create a services</j-timeline-item>
        <j-timeline-item label="2015-09-01 09:12:11"
            >Solve initial network problems</j-timeline-item
        >
        <j-timeline-item>Technical testing</j-timeline-item>
        <j-timeline-item>
            <template #label
                ><strong style="color: red"
                    >2015-09-01 09:12:11</strong
                ></template
            >
            Network problems being solved
        </j-timeline-item>
    </j-timeline>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TimelineProps } from 'ant-design-vue';
export default defineComponent({
    setup() {
        return {
            mode: ref<TimelineProps['mode']>('left'),
        };
    },
});
</script>
