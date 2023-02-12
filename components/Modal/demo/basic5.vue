<docs>
---
order: 1
title: 拖拽
---
    
配置`modalType = message`，并配置拖拽标题`draggableTitle`，支持`string| slot`

</docs>

<template>
    <a-space>
        <a-button type="primary" @click="showModal">拖拽</a-button>
        <a-button type="primary" @click="showModal2">拖拽2</a-button>
        <j-modal
            :visible="visible"
            @ok="handleOk"
            @cancel="handleCancel"
            modalType="draggable"
        >
            <template #draggableTitle>
                <a @click="handleCancel">draggable Modal</a>
            </template>
            123
        </j-modal>
        <j-modal
            :visible="visible2"
            @ok="handleOk2"
            @cancel="handleCancel2"
            modalType="draggable"
            draggableTitle="draggable标题"
        >
            123
        </j-modal>
    </a-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref<boolean>(false);
const visible2 = ref<boolean>(false);

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
const showModal2 = () => {
    visible2.value = true;
};

const handleOk2 = (e: MouseEvent) => {
    console.log(e);
    visible2.value = false;
};
const handleCancel2 = (e: MouseEvent) => {
    console.log(e);
    visible2.value = false;
};
</script>
