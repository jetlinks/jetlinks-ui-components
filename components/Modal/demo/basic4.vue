<docs>
---
order: 1
title: 提示框
---

配置`modalType = message`

> `message`模式下不要配置`title`


</docs>

<template>
    <a-space>
        <a-button type="primary" @click="showModal">提示框</a-button>
        <j-modal
            :visible="visible"
            @ok="handleOk"
            @cancel="handleCancel"
            modalType="message"
        >
            123
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
