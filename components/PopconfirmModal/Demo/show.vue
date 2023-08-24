<docs>
---
order: 3
title: 基本用法
---

</docs>
<template>
    <j-popconfirm-modal @confirm="confirm">
        <template #title> 这是一段文字 </template>
        <j-button>按钮</j-button>
    </j-popconfirm-modal>
</template>

<script setup>
const confirm = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject();
        }, 2000);
    });
};
</script>

<style scoped></style>
