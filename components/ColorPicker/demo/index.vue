<template>
    <demo-sort>
        <Basic />
        <Size />
        <Opacity />
        <Theme />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Size from './size.vue';
import Opacity from './opacity.vue';
import Theme from './theme-color.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Size,
        Opacity,
        Theme,
    },
};
</script>
