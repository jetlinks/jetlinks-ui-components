<template>
    <demo-sort>
        <Common />
        <Components />
        <Table/>
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Common from './common.vue';
import Components from './components.vue';
import Table from './table.vue';
export default {
    CN,
    components: {
        Common,
        Components,
        Table,
    },
};
</script>
