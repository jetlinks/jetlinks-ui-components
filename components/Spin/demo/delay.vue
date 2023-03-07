<docs>
---
order: 5
title: 延迟
---

## zh-CN

延迟显示 loading 效果。当 spinning 状态在 `delay` 时间内结束，则不显示 loading 状态。

</docs>

<template>
    <j-spin :spinning="spinning" :delay="delayTime">
        <j-alert
            message="Alert message title"
            description="Further details about the context of this alert."
        ></j-alert>
    </j-spin>
    <div class="spin-state">
        Loading state：
        <j-switch v-model:checked="spinning" />
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const spinning = ref<boolean>(false);
        const delayTime = 500;

        const changeSpinning = () => {
            spinning.value = !spinning.value;
        };
        return {
            spinning,
            delayTime,
            changeSpinning,
        };
    },
});
</script>
<style scoped>
.spin-state {
    margin-top: 16px;
}
</style>
