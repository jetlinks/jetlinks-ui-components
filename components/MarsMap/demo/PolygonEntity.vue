<docs>
---
order: 3
title: 面
---

面 Entity矢量数据

</docs>
<template>
    <div style="height: 300px">
        <j-map :center="center" :onLoad="onLoad">
            <j-graphic-layer :onLoad="onLoadLayer">
                <j-polygon :positions="positions" :style="style" />
            </j-graphic-layer>
        </j-map>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        const center = ref([106.638986, 29.488061]);
        const positions = ref([
            [106.638986, 29.488061],
            [106.637986, 29.485061],
            [106.634986, 29.482061],
            [106.633986, 29.484061],
        ]);
        const style = ref({
            color: '#ff0000',
        });

        const onLoad = (e) => {
            // console.log('onLoad', e);
        };
        const onLoadLayer = (e) => {
            // console.log('onLoadLayer:', e);
        };

        return {
            center,
            positions,
            style,
            onLoad,
            onLoadLayer,
        };
    },
});
</script>
