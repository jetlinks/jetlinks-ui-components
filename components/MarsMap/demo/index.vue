<template>
    <demo-sort>
        <Basic />
        <Marker />
        <PointEntity />
        <PolygonEntity />
        <InfoWindow />
    </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Marker from './Marker.vue';
import PointEntity from './PointEntity.vue';
import PolygonEntity from './PolygonEntity.vue';
import InfoWindow from './InfoWindow.vue';
export default {
    components: {
        Basic,
        Marker,
        PointEntity,
        PolygonEntity,
        InfoWindow,
    },
};
</script>
