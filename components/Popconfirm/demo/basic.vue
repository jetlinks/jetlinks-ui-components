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
                >
                    <a>topLeft</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="12">
                <JPopconfirm>
                    <a>top</a>
                </JPopconfirm>
            </a-col>
            <a-col :span="1">
                <JPopconfirm
                    placement="topRight"
                    :loading="true"
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
const confirm = (e: MouseEvent) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), 1000);
    });
};
</script>
