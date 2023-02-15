<template>
    <demo-sort :cols="1">
        <Basic />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
    },
};
</script>
