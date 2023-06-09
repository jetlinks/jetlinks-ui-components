<template>
    <demo-sort>
        <Common />
        <Components />
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Common from './common.vue';
import Components from './components.vue';
export default {
    CN,
    components: {
        Common,
        Components,
    },
};
</script>
