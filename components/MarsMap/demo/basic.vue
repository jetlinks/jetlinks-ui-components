<docs>
---
order: 0
title: 基本用法
---

基本用法

</docs>
<template>
    <div style="height: 200px">
        <j-map :center="center">
            <j-marker :position="center"></j-marker>
        </j-map>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const center = ref([106.638986, 29.488061]);

        return {
            center,
        };
    },
});
</script>
