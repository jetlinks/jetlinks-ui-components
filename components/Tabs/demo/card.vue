<docs>
---
order: 0
title: 卡片式页签
---

另一种样式的页签，不提供对应的垂直样式。


</docs>

<template>
    <j-tabs v-model:activeKey="activeKey" type="card">
    <j-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</j-tab-pane>
    <j-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</j-tab-pane>
    <j-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</j-tab-pane>
    </j-tabs>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
    return {
        activeKey: ref('1'),
    };
    },
});
</script>
    