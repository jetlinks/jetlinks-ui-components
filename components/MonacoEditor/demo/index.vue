<template>
    <demo-sort>
        <Basic />
        <Language />
        <Register />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Language from './language.vue';
import Register from './register.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Language,
        Register,
    },
};
</script>
