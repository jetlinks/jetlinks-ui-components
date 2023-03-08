<docs>
---
order: 1
title: 圆圈颜色
---

## zh-CN

圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态。

</docs>

<template>
    <j-timeline>
        <j-timeline-item color="green"
            >Create a services site 2015-09-01</j-timeline-item
        >
        <j-timeline-item color="green"
            >Create a services site 2015-09-01</j-timeline-item
        >
        <j-timeline-item color="red">
            <p>Solve initial network problems 1</p>
            <p>Solve initial network problems 2</p>
            <p>Solve initial network problems 3 2015-09-01</p>
        </j-timeline-item>
        <j-timeline-item>
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
        </j-timeline-item>
        <j-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
        </j-timeline-item>
        <j-timeline-item color="gray">
            <p>Technical testing 1</p>
            <p>Technical testing 2</p>
            <p>Technical testing 3 2015-09-01</p>
        </j-timeline-item>
        <j-timeline-item color="#00CCFF">
            <template #dot>
                <SmileOutlined />
            </template>
            <p>Custom color testing</p>
        </j-timeline-item>
    </j-timeline>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { SmileOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: {
        SmileOutlined,
    },
});
</script>
