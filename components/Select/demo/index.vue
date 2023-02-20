<template>
    <demo-sort>
        <Basic />
        <Optgroup />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Optgroup from './optgroup.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Optgroup
    },
};
</script>
