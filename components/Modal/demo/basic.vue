<docs>
---
order: 1
title: 基本用法
---
    
普通对话框
   
    
</docs>

<template>
    <a-space>
        <a-button type="primary" @click="showModal">Open Modal</a-button>
        <j-modal
            :visible="visible"
            title="Basic Modal"
            @ok="handleOk"
            @cancel="handleCancel"
        >
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
