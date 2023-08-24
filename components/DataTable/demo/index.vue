<template>
    <demo-sort :cols="1">
        <Table2 />
        <Table3 />
        <!--        <Table />-->
        <!--        <PopconfirmModal />-->
        <Components />
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Common from './common.vue';
import Components from './components.vue';
import Table from './table.vue';
import Table2 from './table2.vue';
import Table3 from './table3.vue';
import PopconfirmModal from './popconfirmModal.vue';
export default {
    CN,
    components: {
        Common,
        Components,
        Table,
        Table2,
        Table3,
        PopconfirmModal,
    },
};
</script>
