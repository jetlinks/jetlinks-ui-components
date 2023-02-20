<docs>
---
order: 1
title: 基本用法
---

设置了`title`默认值，完全自定义了取消和确认按钮

</docs>
<template>
    <div class="box">
        <a-row>
            <a-col :span="11">
                <JPopconfirm
                    placement="topLeft"
                    ok-text="ok"
                    cancel-text="不想ok"
                    title="ok？"
                    @confirm="confirm1"
                >
                    <a>topLeft</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="12">
                <JPopconfirm @confirm="confirm2">
                    <a>top</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="1">
                <JPopconfirm
                    placement="topRight"
                    :loading="loading"
                    @confirm="confirm"
                    title="ok？"
                >
                    <a>topRight</a>
                </JPopconfirm>
            </a-col>
        </a-row>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
const loading = ref(false);

const confirm1 = (e: MouseEvent) => {
    console.log('111ok', e);
    return 1;
};
const confirm2 = (e: MouseEvent) => {
    console.log('111ok', e);
};
const confirm = (e: MouseEvent) => {
    loading.value = true;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
            loading.value = false;
        }, 1000);
    });
};
</script>
