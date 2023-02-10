<template>
    <demo-sort>
        <Basic />
        <Presuffix />
        <Textarea />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Presuffix from './presuffix.vue';
import Textarea from './textarea.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Presuffix,
        Textarea,
    },
};
</script>
