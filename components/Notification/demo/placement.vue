<docs>
---
order: 6
title: 位置
---

## zh-CN

可以设置通知从右上角、右下角、左下角、左上角弹出。

</docs>

<template>
    <div>
        <j-button type="primary" @click="openNotification('topLeft')">
            <radius-upleft-outlined />
            topLeft
        </j-button>
        <j-button type="primary" @click="openNotification('topRight')">
            <radius-upright-outlined />
            topRight
        </j-button>
        <j-divider />
        <j-button type="primary" @click="openNotification('bottomLeft')">
            <radius-bottomleft-outlined />
            bottomLeft
        </j-button>
        <j-button type="primary" @click="openNotification('bottomRight')">
            <radius-bottomright-outlined />
            bottomRight
        </j-button>
    </div>
</template>
<script lang="ts">
import {
    RadiusUpleftOutlined,
    RadiusUprightOutlined,
    RadiusBottomleftOutlined,
    RadiusBottomrightOutlined,
} from '@ant-design/icons-vue';
import { notification } from 'jetlinks-ui-components';
import { defineComponent } from 'vue';
import type { NotificationPlacement } from 'jetlinks-ui-components';
export default defineComponent({
    components: {
        RadiusUpleftOutlined,
        RadiusUprightOutlined,
        RadiusBottomleftOutlined,
        RadiusBottomrightOutlined,
    },
    setup() {
        const openNotification = (placement: NotificationPlacement) => {
            notification.open({
                message: `Notification ${placement}`,
                description:
                    'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
                placement,
            });
        };
        return {
            openNotification,
        };
    },
});
</script>
