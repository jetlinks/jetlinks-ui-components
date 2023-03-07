<docs>
---
order: 3
title: 倒计时
---

## zh-CN

倒计时组件。

</docs>

<template>
    <j-row :gutter="16">
        <j-col :span="12">
            <j-statistic-countdown
                title="Countdown"
                :value="deadline"
                style="margin-right: 50px"
                @finish="onFinish"
            />
        </j-col>
        <j-col :span="12">
            <j-statistic-countdown
                title="Million Seconds"
                :value="deadline"
                format="HH:mm:ss:SSS"
                style="margin-right: 50px"
            />
        </j-col>
        <j-col :span="24" style="margin-top: 32px">
            <j-statistic-countdown
                title="Day Level"
                :value="deadline"
                format="D 天 H 时 m 分 s 秒"
            />
        </j-col>
    </j-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    setup() {
        const onFinish = () => {
            console.log('finished!');
        };
        return {
            deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
            onFinish,
        };
    },
});
</script>
