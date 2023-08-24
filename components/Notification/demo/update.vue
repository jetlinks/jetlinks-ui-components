<docs>
---
order: 7
title: 更新消息内容
---

## zh-CN

可以通过唯一的 key 来更新内容, 或者通过响应式数据更新。

</docs>

<template>
    <j-button type="primary" @click="openNotification">
        Open the notification box (update by key)
    </j-button>
    <br />
    <br />
    <j-button type="primary" @click="openNotification2">
        Open the notification box (update by reactive)
    </j-button>
</template>
<script lang="ts">
import { notification } from 'jetlinks-ui-components';
import { defineComponent, ref } from 'vue';
const key = 'updatable';
export default defineComponent({
    setup() {
        const openNotification = () => {
            notification.open({
                key,
                message: 'Notification Title',
                description: 'description.',
            });
            setTimeout(() => {
                notification.open({
                    key,
                    message: 'New Title',
                    description: 'New description.',
                });
            }, 1000);
        };
        const message = ref('Notification Title');
        const description = ref('description');
        const openNotification2 = () => {
            // content must use function
            notification.open({
                message: () => message.value,
                description: () => description.value,
            });
            setTimeout(() => {
                message.value = 'New Title';
                description.value = 'New description.';
            }, 1000);
        };
        return {
            openNotification,
            openNotification2,
        };
    },
});
</script>
