<docs>
---
order: 0
title: 自定义主题色和标准色
---

自定义主题色和标准色

</docs>
<template>
    <j-color-picker
        v-model:hex="hex"
        :standard-color="standardColor"
        :theme-color="themeColor"
    />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const hex = ref<string>(`#c21401`);
        const standardColor = ref([
            '#c21401',
            '#ff1e02',
            '#ffc12a',
            '#ffff3a',
            '#90cf5b',
            '#00af57',
            '#00afee',
            '#0071be',
            '#00215f',
            '#72349d',
        ]);
        const themeColor = ref([
            '#000000',
            '#ffffff',
            '#eeece1',
            '#1e497b',
            '#4e81bb',
            '#e2534d',
            '#9aba60',
            '#8165a0',
            '#47acc5',
            '#f9974c',
        ]);

        return {
            hex,
            standardColor,
            themeColor,
        };
    },
});
</script>
