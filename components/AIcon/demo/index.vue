<template>
    <demo-sort>
        <Basic />
        <Basic2 />
        <Basic3 />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Basic2 from './basic2.vue';
import Basic3 from './basic3.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Basic2,
        Basic3,
    },
};
</script>
