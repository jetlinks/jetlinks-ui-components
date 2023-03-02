<template>
  <demo-sort :cols="1">
    <Basic />
    <Customize />
    <Vertical />
    <Align />
    <Size />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Customize from './customize.vue';
import Vertical from './vertical.vue';
import Align from './align.vue';
import Size from './size.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Customize,
    Vertical,
    Align,
    Size
  },
  setup() {
    return {};
  },
});
</script>
