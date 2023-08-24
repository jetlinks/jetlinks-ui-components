<template>
    <demo-sort>
        <Basic />
        <Basic2 />
        <Basic3 />
        <Basic4 />
    </demo-sort>
    <demo-sort :cols="1">
        <IconDisplay />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Basic2 from './basic2.vue';
import Basic3 from './basic3.vue';
import Basic4 from './basic4.vue';
import IconDisplay from './iconDisplay.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Basic2,
        Basic3,
        Basic4,
        IconDisplay,
    },
};
</script>
