<docs>
---
order: 3
title: 自定义时间轴点
---

## zh-CN

可以设置为图标或其他自定义元素。

</docs>

<template>
    <j-timeline>
        <j-timeline-item>Create a services site 2015-09-01</j-timeline-item>
        <j-timeline-item
            >Solve initial network problems 2015-09-01</j-timeline-item
        >
        <j-timeline-item color="red">
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
