<template>
    <demo-sort :cols="1">
        <Basic />
        <Basic2 />
        <Basic3 />
        <Basic4 />
        <Basic404 />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Basic2 from './basic2.vue';
import Basic3 from './basic3.vue';
import Basic4 from './basic4.vue';
import Basic404 from './Basic404.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Basic2,
        Basic3,
        Basic4,
        Basic404,
    },
};
</script>
