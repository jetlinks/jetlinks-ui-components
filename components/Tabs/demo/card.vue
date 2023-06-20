<docs>
---
order: 2
title: 卡片式页签
---

另一种样式的页签，不提供对应的垂直样式。


</docs>

<template>
    <j-tabs v-model:activeKey="activeKey" type="card">
        <j-tab-pane key="1" tab="Tab 1">
            <j-tabs style="height: 200px" tabPosition="left">
                <j-tab-pane key="11" tab="Tab 11"> Content 11 </j-tab-pane>
                <j-tab-pane key="12" tab="Tab 12"> Content 12 </j-tab-pane>
                <j-tab-pane key="13" tab="Tab 13"> Content 13 </j-tab-pane>
                <j-tab-pane key="14" tab="Tab 14"> Content 14 </j-tab-pane>
                <j-tab-pane key="15" tab="Tab 15"> Content 15 </j-tab-pane>
                <j-tab-pane key="16" tab="Tab 16"> Content 16 </j-tab-pane>
                <j-tab-pane key="17" tab="Tab 17"> Content 17 </j-tab-pane>
                <j-tab-pane key="18" tab="Tab 18"> Content 18 </j-tab-pane>
            </j-tabs>
        </j-tab-pane>
        <j-tab-pane key="2" tab="Tab 2" force-render
            >Content of Tab Pane 2</j-tab-pane
        >
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
