<docs>
---
order: 0
title: PointEntity
---

像素点 Entity对象

</docs>
<template>
    <div style="height: 200px">
        <j-map :center="center" :onLoad="onLoad">
            <j-marker :position="markerPos" :image="markerIcon"></j-marker>
        </j-map>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const center = ref([106.638986, 29.488061]);
        const markerPos = ref([106.638986, 29.488061]);
        const markerIcon = ref(
            'https://pic.616pic.com/ys_img/00/25/54/uhG3OtV6GB.jpg',
        );
        const onLoad = (e) => {
            console.log('onLoad', e);
        };

        return {
            center,
            markerPos,
            markerIcon,
            onLoad,
        };
    },
});
</script>
