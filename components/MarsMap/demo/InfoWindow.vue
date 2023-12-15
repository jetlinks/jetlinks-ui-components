<docs>
---
order: 4
title: 信息窗
---

信息窗

</docs>
<template>
    <div style="height: 300px">
        <j-map :center="center" :onLoad="onLoad">
            <j-marker :position="center" @click="handleClick"></j-marker>
            <j-info-window :visible="visible" :position="infoWindowPosition">
                <div>infoWindow 弹窗111</div>
            </j-info-window>
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
            color: 'green',
        });
        const infoWindowPosition = ref([]);
        const visible = ref(false);

        const onLoad = (e) => {
            // console.log('onLoad', e);
        };
        const handleClick = (e) => {
            console.log('handleClick', e);
            const {
                options: { position },
            } = e;
            infoWindowPosition.value = position;
            visible.value = !visible.value;
        };

        return {
            center,
            pointPos,
            style,
            visible,
            infoWindowPosition,
            onLoad,
            handleClick,
        };
    },
});
</script>
