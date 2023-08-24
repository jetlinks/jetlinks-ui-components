<template>
    <demo-sort>
        <basic />
        <custom />
    </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Custom from './custom.vue';

import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
    CN,
    components: {
        Basic,
        Custom,
    },
    setup() {
        return {};
    },
});
</script>
