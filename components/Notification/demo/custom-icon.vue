<docs>
---
order: 3
title: 自定义图标
---

## zh-CN

图标可以被自定义。

</docs>

<template>
    <j-button type="primary" @click="openNotification"
        >Open the notification box</j-button
    >
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { notification } from 'jetlinks-ui-components';
import { defineComponent, h } from 'vue';

export default defineComponent({
    setup() {
        const openNotification = () => {
            notification.open({
                message: 'Notification Title',
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                icon: () => h(SmileOutlined, { style: 'color: #108ee9' }),
            });
        };

        return {
            openNotification,
        };
    },
});
</script>
