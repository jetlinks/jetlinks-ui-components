<docs>
---
order: 2
title: 多个标记点
---

Markers

</docs>
<template>
    <div style="height: 300px">
        <j-map :center="center" :onLoad="onLoad">
            <j-markers :markers="markers" @click="handleClick" />
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
        const markers = ref([
            {
                position: [106.638986, 29.488061],
                // image: 'https://pic.616pic.com/ys_img/00/25/54/uhG3OtV6GB.jpg',
            },
            {
                position: [106.634986, 29.488061],
            },
        ]);

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
            markers,
            visible,
            infoWindowPosition,
            onLoad,
            handleClick,
        };
    },
});
</script>
