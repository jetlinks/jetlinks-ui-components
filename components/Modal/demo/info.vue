<docs>
---
order: 4
title: 信息提示
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

</docs>

<template>
    <j-space wrap>
    <j-button @click="info">Info</j-button>
    <j-button @click="success">Success</j-button>
    <j-button @click="error">Error</j-button>
    <j-button @click="warning">Warning</j-button>
    <j-button @click="confirm">confirm</j-button>
    </j-space>
</template>
<script lang="ts">
import { Modal } from 'jetlinks-ui-components';
import { defineComponent, h } from 'vue';
export default defineComponent({
    setup() {
    const info = () => {
        Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
            h('p', 'some messages...some messages...'),
            h('p', 'some messages...some messages...'),
        ]),
        onOk() {
            console.log('ok');
        },
        });
    };
    const success = () => {
        Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
            h('p', 'some messages...some messages...'),
            h('p', 'some messages...some messages...'),
        ]),
        });
    };

    const error = () => {
        Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
        });
    };

    const warning = () => {
        Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
        });
    };
    const confirm = () => {
        Modal.confirm({
            title: 'Do you Want to delete these items?',
            content: 'some confirm message',
            onOk() {
            console.log('OK');
            },
            onCancel() {
            console.log('Cancel');
            },
            class: 'test',
        });
    }
    return {
        info,
        success,
        error,
        warning,
        confirm,
    };
    },
});
</script>
