<template>
    <demo-sort :cols="1">
        <Basic />
        <AdvancedSearch />
        <AdvancedLow />
    </demo-sort>
</template>

<script>
import CN from '../index.md';
import Basic from './basic.vue';
import AdvancedSearch from './Advanced.vue';
import AdvancedLow from './AdvancedLow.vue';
export default {
    CN,
    components: {
        Basic,
        AdvancedSearch,
        AdvancedLow,
    },
};
</script>

<style scoped></style>
