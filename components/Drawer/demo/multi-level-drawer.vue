<docs>
---
order: 5
title: 多层抽屉
---

## zh-CN

在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。

</docs>

<template>
    <j-button type="primary" @click="showDrawer">Open</j-button>
    <j-drawer
        v-model:visible="visible"
        title="Multi-level drawer"
        width="520"
        :closable="false"
        :footer-style="{ textAlign: 'right' }"
        @close="onClose"
    >
        <j-button type="primary" @click="showChildrenDrawer"
            >Two-level drawer</j-button
        >
        <j-drawer
            v-model:visible="childrenDrawer"
            title="Two-level Drawer"
            width="320"
            :closable="false"
        >
            <j-button type="primary" @click="showChildrenDrawer"
                >This is two-level drawer</j-button
            >
        </j-drawer>

        <template #footer>
            <j-button style="margin-right: 8px" @click="onClose"
                >Cancel</j-button
            >
            <j-button type="primary" @click="onClose">Submit</j-button>
        </template>
    </j-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const visible = ref<boolean>(false);

        const childrenDrawer = ref<boolean>(false);

        const showDrawer = () => {
            visible.value = true;
        };
        const onClose = () => {
            visible.value = false;
        };
        const showChildrenDrawer = () => {
            childrenDrawer.value = true;
        };
        return {
            visible,
            childrenDrawer,
            showDrawer,
            onClose,
            showChildrenDrawer,
        };
    },
});
</script>
