<docs>
---
order: 0
title: 多边形
---

Polygon对象 标绘处理对应的编辑类

</docs>
<template>
    <div style="height: 300px">
        <j-map :center="center" :onLoad="onLoad">
            <j-polygon :positions="positions" :style="style" />
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
            console.log('onLoad', e);
        };

        return {
            center,
            positions,
            style,
            onLoad,
        };
    },
});
</script>
