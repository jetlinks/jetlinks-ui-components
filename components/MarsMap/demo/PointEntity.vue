<docs>
---
order: 0
title: PointEntity
---

像素点 Entity对象

</docs>
<template>
    <div style="height: 300px">
        <j-map :center="center" :onLoad="onLoad">
            <j-point :position="pointPos" :style="style" />
            <j-marker :position="[106.648986, 29.488061]" />
        </j-map>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const center = ref([106.638986, 29.488061]);
        const pointPos = ref([106.638986, 29.488061]);
        const style = ref({
            pixelSize: 20,
            color: 'blue',
        });
        const onLoad = (e) => {
            console.log('onLoad', e);
        };

        return {
            center,
            pointPos,
            style,
            onLoad,
        };
    },
});
</script>
