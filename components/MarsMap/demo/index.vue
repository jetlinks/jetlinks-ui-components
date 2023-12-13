<template>
    <demo-sort>
        <Basic />
        <Marker />
        <PointEntity />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Marker from './Marker.vue'
import PointEntity from './PointEntity.vue';
export default {
    components: {
        Basic,
        Marker,
        PointEntity,
    },
};
</script>
