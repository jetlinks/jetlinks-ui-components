<docs>
---
order: 1
title: 自动关闭的延时
---

## zh-CN

自定义通知框自动关闭的延时，默认 `4.5s`，取消自动关闭只要将该值设为 `0` 即可。

</docs>

<template>
    <j-button type="primary" @click="openNotification"
        >Open the notification box</j-button
    >
</template>
<script lang="ts">
import { notification } from 'jetlinks-ui-components';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description:
                    'I will never close automatically. I will be close automatically. I will never close automatically.',
                duration: 0,
            });
        };

        return {
            openNotification,
        };
    },
});
</script>
