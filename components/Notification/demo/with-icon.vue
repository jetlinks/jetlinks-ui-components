<docs>
---
order: 2
title: 带有图标的通知提醒框
---

## zh-CN

通知提醒框左侧有图标。

</docs>

<template>
    <div>
        <j-space>
            <j-button @click="() => openNotificationWithIcon('success')"
                >Success</j-button
            >
            <j-button @click="() => openNotificationWithIcon('info')"
                >Info</j-button
            >
            <j-button @click="() => openNotificationWithIcon('warning')"
                >Warning</j-button
            >
            <j-button @click="() => openNotificationWithIcon('error')"
                >Error</j-button
            >
        </j-space>
    </div>
</template>
<script lang="ts">
import { notification } from 'jetlinks-ui-components';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const openNotificationWithIcon = (type: string) => {
            notification[type]({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        };

        return {
            openNotificationWithIcon,
        };
    },
});
</script>
