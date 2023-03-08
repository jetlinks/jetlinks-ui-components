<docs>
---
order: 0
title: 基本用法
---

## zh-CN

最简单的用法，4.5 秒后自动关闭。

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
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                onClick: () => {
                    console.log('Notification Clicked!');
                },
            });
        };

        return {
            openNotification,
        };
    },
});
</script>
