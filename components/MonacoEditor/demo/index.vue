<template>
    <demo-sort>
        <Basic />
        <Language />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Language from './language.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Language,
    },
};
</script>
