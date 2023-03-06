<docs>
---
order: 2
title: 最后一个及排序
---

## zh-CN

当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 `pending` 为真值时展示幽灵节点，如果 `pending` 是 `VNode` 可用于定制该节点内容，同时 `pendingDot` 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。

</docs>

<template>
    <div>
        <j-timeline pending="Recording..." :reverse="reverse">
            <j-timeline-item>Create a services site 2015-09-01</j-timeline-item>
            <j-timeline-item
                >Solve initial network problems 2015-09-01</j-timeline-item
            >
            <j-timeline-item>Technical testing 2015-09-01</j-timeline-item>
        </j-timeline>
        <j-button type="primary" style="margin-top: 16px" @click="handleClick"
            >Toggle Reverse</j-button
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const reverse = ref<boolean>(false);

        const handleClick = () => {
            reverse.value = !reverse.value;
        };

        return {
            reverse,
            handleClick,
        };
    },
});
</script>
