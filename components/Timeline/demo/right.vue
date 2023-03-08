<docs>
---
order: 5
title: 右侧时间轴点
---

## zh-CN

时间轴点可以在内容的右边。

</docs>

<template>
    <j-timeline mode="right">
        <j-timeline-item>Create a services site 2015-09-01</j-timeline-item>
        <j-timeline-item
            >Solve initial network problems 2015-09-01</j-timeline-item
        >
        <j-timeline-item>
            <template #dot
                ><clock-circle-outlined style="font-size: 16px"
            /></template>
            Technical testing 2015-09-01
        </j-timeline-item>
        <j-timeline-item
            >Network problems being solved 2015-09-01</j-timeline-item
        >
    </j-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        ClockCircleOutlined,
    },
});
</script>
