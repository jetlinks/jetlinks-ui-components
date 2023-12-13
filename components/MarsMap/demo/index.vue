<template>
    <demo-sort>
        <Basic />
        <Marker />
        <PointEntity />
        <PolygonEntity />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Marker from './Marker.vue';
import PointEntity from './PointEntity.vue';
import PolygonEntity from './PolygonEntity.vue';
export default {
    components: {
        Basic,
        Marker,
        PointEntity,
        PolygonEntity,
    },
};
</script>
