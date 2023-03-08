<docs>
---
order: 7
title: 预设宽度
---

## zh-CN

抽屉的默认宽度为 `378px`，另外还提供一个大号抽屉 `736px`，可以用 size 属性来设置。

## en-US

The default width (or height) of Drawer is `378px`, and there is a presetted large size `736px`.

</docs>
q
<template>
    <j-button
        type="primary"
        style="margin-right: 8px"
        @click="showDrawer('default')"
    >
        Open Default Size (378px)
    </j-button>
    <j-button type="primary" @click="showDrawer('large')"
        >Open Large Size (736px)</j-button
    >
    <j-drawer
        title="Basic Drawer"
        :size="size"
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
        const visible = ref<boolean>(false);
        const size = ref<DrawerProps['size']>('default');

        const showDrawer = (val: DrawerProps['size']) => {
            size.value = val;
            visible.value = true;
        };

        const onClose = () => {
            visible.value = false;
        };
        return {
            visible,
            size,
            showDrawer,
            onClose,
        };
    },
});
</script>
