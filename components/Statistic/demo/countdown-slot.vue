<docs>
---
order: 4
title: 倒计时组件
---

## zh-CN

倒计时组件使用插槽。

</docs>

<template>
    <j-row :gutter="16">
        <j-col :span="12">
            <j-statistic-countdown
                :value="deadline"
                style="margin-right: 50px"
                @finish="onFinish"
            >
                <template #title>
                    <span>Countdown</span>
                    <j-tooltip placement="right">
                        <template #title>
                            <span>hurry up!</span>
                        </template>
                        <question-circle-two-tone style="margin-left: 5px" />
                    </j-tooltip>
                </template>
            </j-statistic-countdown>
        </j-col>
        <j-col :span="24" style="margin-top: 32px">
            <j-statistic-countdown
                title="Million Seconds countdown"
                :value="deadline"
                format="HH:mm:ss:SSS"
                style="margin-right: 50px"
            >
                <template #prefix>
                    <span>There's only</span>
                </template>
                <template #suffix>
                    <span>left for the end.</span>
                </template>
            </j-statistic-countdown>
        </j-col>
    </j-row>
</template>
<script lang="ts">
import { QuestionCircleTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        QuestionCircleTwoTone,
    },
    setup() {
        const onFinish = () => {
            console.log('finished!');
        };
        return {
            deadline: Date.now() + 1000 * 60 * 60 * 20 * 2,
            onFinish,
        };
    },
});
</script>
