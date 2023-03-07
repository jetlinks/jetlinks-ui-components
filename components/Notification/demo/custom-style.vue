<docs>
---
order: 5
title: 自定义样式
---

## zh-CN

使用 `style` 和 `class` 来定义样式。

</docs>

<template>
    <j-button type="primary" @click="openNotification"
        >Open the notification box</j-button
    >
</template>
<script>
import { notification } from 'jetlinks-ui-components';
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                style: {
                    width: '600px',
                    marginLeft: `${335 - 600}px`,
                },
                class: 'notification-custom-class',
            });
        };
        return {
            openNotification,
        };
    },
});
</script>
<style>
.notification-custom-class {
    color: red;
}
</style>
