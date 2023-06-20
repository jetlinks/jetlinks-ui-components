<template>
    <demo-sort :cols="1">
        <!--        <Basic />-->
        <AdvancedSearch />
        <!--        <AdvancedLow />-->
        <!--        <Component />-->
    </demo-sort>
</template>

<script>
import CN from '../index.md';
import Basic from './basic.vue';
import AdvancedSearch from './Advanced.vue';
import AdvancedLow from './AdvancedLow.vue';
import Component from './Component.vue';
export default {
    CN,
    components: {
        Basic,
        AdvancedSearch,
        AdvancedLow,
        Component,
    },
};
</script>

<style scoped></style>
