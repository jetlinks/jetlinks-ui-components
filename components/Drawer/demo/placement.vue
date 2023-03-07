<docs>
---
order: 1
title: 自定义位置
---

## zh-CN

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

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
        title="Basic Drawer"
        :placement="placement"
        :closable="false"
        :visible="visible"
        @close="onClose"
    >
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
