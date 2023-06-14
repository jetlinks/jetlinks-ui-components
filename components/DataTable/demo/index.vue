<template>
    <demo-sort>
        <Common />
        <Components />
        <PopconfirmModal />
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Common from './common.vue';
import Components from './components.vue';
import PopconfirmModal from './popconfirmModal.vue'
export default {
    CN,
    components: {
        Common,
        Components,
      PopconfirmModal
    },
};
</script>
