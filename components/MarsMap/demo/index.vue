<template>
    <demo-sort>
        <Basic />
        <PointEntity />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import PointEntity from './PointEntity.vue';
export default {
    components: {
        Basic,
        PointEntity,
    },
};
</script>
