<template>
    <demo-sort :cols="1">
        <Basic />
        <Promise />
        <Selection />
        <Search />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Promise from './promise.vue';
import Selection from './selection.vue';
import Search from './search.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Promise,
        Selection,
        Search,
    },
};
</script>
