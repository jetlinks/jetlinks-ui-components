<docs>
---
order: 1
title: loading状态
---
    
确认按钮loading状态
   
    
</docs>

<template>
    <a-space>
        <a-button type="primary" @click="showModal"
            >Open Modal with async logic</a-button
        >
        <j-modal
            :visible="visible"
            title="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
            :confirmLoading="confirmLoading"
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
const confirmLoading = ref<boolean>(false);

const showModal = () => {
    visible.value = true;
};

const handleOk = (e: MouseEvent) => {
    console.log(e);
    confirmLoading.value = true;

    setTimeout(() => {
        confirmLoading.value = false;

        visible.value = false;
    }, 1000);
};
const handleCancel = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
};
</script>
