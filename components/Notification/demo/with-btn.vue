<docs>
---
order: 4
title: 自定义按钮
---

## zh-CN

自定义关闭按钮的样式和文字。

</docs>

<template>
    <j-button type="primary" @click="openNotification"
        >Open the notification box</j-button
    >
</template>

<script lang="ts">
import { notification, Button } from 'jetlinks-ui-components';
import { h, defineComponent } from 'vue';

const close = () => {
    console.log(
        'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
};
export default defineComponent({
    setup() {
        const openNotification = () => {
            const key = `open${Date.now()}`;
            notification.open({
                message: 'Notification Title',
                description:
                    'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
                btn: () =>
                    h(
                        Button,
                        {
                            type: 'primary',
                            size: 'small',
                            onClick: () => notification.close(key),
                        },
                        { default: () => 'Confirm' },
                    ),
                key,
                onClose: close,
            });
        };

        return {
            openNotification,
        };
    },
});
</script>
