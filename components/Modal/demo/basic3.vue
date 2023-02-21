<docs>
---
order: 1
title: 自定义
---
    
自定义底部和头部
   
    
</docs>

<template>
    <a-space>
        <a-button type="primary" @click="showModal">自定义</a-button>
        <j-modal :visible="visible" @cancel="handleCancel">
            <template #title>
                <a key="back" @click="handleCancel">点击Return</a>
            </template>
            <template #footer>
                <a-button key="back" @click="handleCancel">Return</a-button>
                <a-button key="submit" type="primary" @click="handleOk"
                    >Submit</a-button
                >
            </template>

            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </j-modal>
    </a-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref<boolean>(false);

const showModal = () => {
    visible.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);

    visible.value = false;
};
const handleCancel = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
};
</script>
