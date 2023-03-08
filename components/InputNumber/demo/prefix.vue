<docs>
---
order: 7
title: 前缀
---

## zh-CN

在输入框上添加前缀图标。

</docs>

<template>
    <j-input-number v-model:value="value1" prefix="￥" style="width: 100%" />
    <br />
    <br />
    <j-input-number v-model:value="value2" prefix="￥" style="width: 100%">
        <template #addonBefore>
            <UserOutlined />
        </template>
    </j-input-number>
    <br />
    <br />
    <j-input-number
        v-model:value="value3"
        prefix="￥"
        disabled
        style="width: 100%"
    />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
export default defineComponent({
    components: { UserOutlined },
    setup() {
        const value1 = ref<number>(1);
        const value2 = ref<number>(2);
        const value3 = ref<number>(3);

        return {
            value1,
            value2,
            value3,
        };
    },
});
</script>
