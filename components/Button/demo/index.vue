<template>
    <demo-sort :cols="1">
        <Basic />
        <Icon />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Icon from './icon.vue';
import CN from '../index.md';
export default {
    CN,
    components: {
        Basic,
        Icon
    },
};
</script>
