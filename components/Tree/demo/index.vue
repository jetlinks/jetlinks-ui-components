<template>
    <demo-sort>
        <Basic />
        <digData></digData>
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import digData from './digData.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        digData
    },
};
</script>
