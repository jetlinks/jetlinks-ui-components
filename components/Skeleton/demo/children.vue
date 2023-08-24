<docs>
---
order: 4
title: 包含子组件
---

## zh-CN

加载占位图包含子组件。

</docs>

<template>
    <div class="article">
        <j-skeleton :loading="loading">
            <div>
                <h4>Jetlinks ui component, a design language</h4>
                <p>
                    We supply a series of design principles, practical patterns
                    and high quality design resources (Sketch and Axure), to
                    help people create their product prototypes beautifully and
                    efficiently.
                </p>
            </div>
        </j-skeleton>
        <j-button :disabled="loading" @click="showSkeleton"
            >Show Skeleton</j-button
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const loading = ref<boolean>(false);

        const showSkeleton = () => {
            loading.value = true;
            setTimeout(() => {
                loading.value = false;
            }, 3000);
        };
        return {
            loading,
            showSkeleton,
        };
    },
});
</script>
<style scoped>
.article h4 {
    margin-bottom: 16px;
}
.article button {
    margin-top: 16px;
}
</style>
