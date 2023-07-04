<docs>
---
order: 4
title: confirmLoading
---

</docs>
<template>
    <j-popconfirm-modal :confirmLoading="loading" @confirm="confirm">
        <template #title> 这是一段文字 </template>
        <j-button>按钮</j-button>
    </j-popconfirm-modal>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'Loading',
    setup() {
        const loading = ref(false);
        const confirm = () => {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
            }, 2000);
        };

        return {
            loading,
            confirm,
        };
    },
};
</script>

<style scoped></style>
