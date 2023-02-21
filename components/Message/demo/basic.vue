<docs>
---
order: 1
title: 基本用法
---

更改了`message.config`配置，默认显示一个message

```js
message.config({
    maxCount: 1,
});
````

</docs>

<template>
    <Button @click="openMessage(configs[0])">open</Button>
    <p></p>
    <Button type="primary" @click="openMessage(configs[1])">success</Button>
    <p></p>
    <Button type="primary" danger @click="openMessage(configs[2])"
        >error</Button
    >
    <p></p>
    <Button type="dashed" @click="openMessage(configs[3])">info</Button>
    <p></p>
    <Button type="dashed" danger @click="openMessage(configs[4])"
        >warning</Button
    >
    <p></p>
    <Button type="primary" @click="openMessage(configs[5])">loading</Button>
    <p></p>
</template>

<script lang="ts" setup>
import { Button } from 'ant-design-vue';
import type { MessageArgsProps } from 'ant-design-vue';
import { Message as JMessage } from 'JUI';

const configs: MessageArgsProps = [
    {
        type: 'open',
        content: 'open测试',
    },
    {
        type: 'success',
        content: 'success测试',
    },
    {
        type: 'error',
        content: 'error测试',
    },
    {
        type: 'info',
        content: 'info测试',
    },
    {
        type: 'warning',
        content: 'warning测试',
    },
    {
        type: 'loading',
        content: 'loading测试',
        onClose: () => {
            console.log('loading测试');
        },
    },
];

const openMessage = (config: MessageArgsProps) => {
    JMessage(config);
};
</script>
