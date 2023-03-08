<docs>
---
order: 2
title: 额外操作
---

## zh-CN

在 Ant Design 规范中，操作按钮建议放在抽屉的右上角，可以使用 extra 属性来实现。

</docs>

<template>
    <j-radio-group v-model:value="placement" style="margin-right: 8px">
        <j-radio value="top">top</j-radio>
        <j-radio value="right">right</j-radio>
        <j-radio value="bottom">bottom</j-radio>
        <j-radio value="left">left</j-radio>
    </j-radio-group>
    <j-button type="primary" @click="showDrawer">Open</j-button>
    <j-drawer
        :width="500"
        title="Basic Drawer"
        :placement="placement"
        :visible="visible"
        @close="onClose"
    >
        <template #extra>
            <j-button style="margin-right: 8px" @click="onClose"
                >Cancel</j-button
            >
            <j-button type="primary" @click="onClose">Submit</j-button>
        </template>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </j-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DrawerProps } from 'ant-design-vue';
export default defineComponent({
    setup() {
        const placement = ref<DrawerProps['placement']>('left');
        const visible = ref<boolean>(false);

        const showDrawer = () => {
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };
        return {
            placement,
            visible,
            showDrawer,
            onClose,
        };
    },
});
</script>
