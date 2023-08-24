<docs>
---
order: 1
title: success
---

成功的结果。

</docs>
<template>
    <j-result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    >
        <template #extra>
            <j-button key="console" type="primary">Go Console</j-button>
            <j-button key="buy">Buy Again</j-button>
        </template>
    </j-result>
</template>
