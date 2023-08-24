<template>
    <demo-sort>
        <Basic />
        <Basic2 />
        <Basic3 />
        <Basic4 />
        <Basic5 />
        <Info />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Basic2 from './basic2.vue';
import Basic3 from './basic3.vue';
import Basic4 from './basic4.vue';
import Basic5 from './basic5.vue';
import Info from './info.vue'
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Basic2,
        Basic3,
        Basic4,
        Basic5,
        Info
    },
};
</script>
