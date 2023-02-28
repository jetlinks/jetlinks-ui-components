<template>
    <template v-if="iframeName === 'Basic'">
        <Basic />
    </template>
    <template v-else-if="iframeName === 'Top'">
        <Top />
    </template>
    <demo-sort v-else :cols="1">
        <Basic />
        <Top />
    </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Basic from './basic.vue';
import Top from './top.vue';
import { defineComponent, provide } from 'vue';

export default defineComponent({
    CN,
    components: {
        Basic,
        Top,
    },
    props: {
        iframeName: String,
    },
    setup(props) {
        console.log('props', props);
        provide(
            'iframeDemo',
            !props.iframeName
                ? {
                      Basic: '/iframe/layout/#Basic',
                      Top: '/iframe/layout/#Top',
                  }
                : {},
        );
    },
});
</script>

<style scoped></style>
