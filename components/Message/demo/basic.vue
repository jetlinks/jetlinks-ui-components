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
    <j-space>
        <Button @click="openMessage(configs[0])">open</Button>
        <Button type="primary" @click="openMessage(configs[1])">success</Button>
        <Button type="primary" danger @click="openMessage(configs[2])"
            >error</Button
        >
        <Button type="dashed" @click="openMessage(configs[3])">info</Button>
        <Button type="dashed" danger @click="openMessage(configs[4])"
            >warning</Button
        >
        <Button type="primary" @click="openMessage(configs[5])">loading</Button>
    </j-space>
</template>

<script setup>
import { message, Button } from 'jetlinks-ui-components';

const configs = [
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

const openMessage = (config) => {
    message[config.type](config.content);
};
</script>
