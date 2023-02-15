<template>
    <demo-sort>
        <ClickUpload />
    </demo-sort>

    <demo-sort>
        <Drag />
    </demo-sort>

    <demo-sort>
        <Images />
    </demo-sort>

    <demo-sort>
        <Picture />
    </demo-sort>
</template>
<script lang="ts">
import ClickUpload from './clickUpload.vue';
import Drag from './drag.vue';
import Picture from './picture.vue';
import Images from './images.vue';
import CN from '../index.md';
import DemoSort from '../../../site/src/components/demoSort';
export default {
    CN,
    components: {
        DemoSort,
        ClickUpload,
        Drag,
        Images,
        Picture,
    },
};
</script>
