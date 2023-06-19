<template>
    <demo-sort :cols="1">
        <Common />
        <Table/>
        <PopconfirmModal />
        <Components />
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Common from './common.vue';
import Components from './components.vue';
import Table from './table.vue';
import PopconfirmModal from './popconfirmModal.vue'
export default {
    CN,
    components: {
        Common,
        Components,
        Table,
      PopconfirmModal
    },
};
</script>
