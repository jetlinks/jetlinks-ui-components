<template>
    <demo-sort>
        <Basic />
        <Boolean />
        <Optgroup />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Optgroup from './optgroup.vue';
import Boolean from './boolean.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Optgroup,
        Boolean,
    },
};
</script>
