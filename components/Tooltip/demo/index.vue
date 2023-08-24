<template>
    <demo-sort>
        <basic />
        <placement />
        <arrow-point-at-center />
        <auto-adjust-overflow />
        <color />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Placement from './placement.vue';
import arrowPointAtCenter from './arrow-point-at-center.vue';
import AutoAdjustOverflow from './auto-adjust-overflow.vue';
import Color from './color.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';
export default defineComponent({
    CN,
    components: {
        Basic,
        Placement,
        arrowPointAtCenter,
        AutoAdjustOverflow,
        Color,
    },
    setup() {
        return {};
    },
});
</script>
