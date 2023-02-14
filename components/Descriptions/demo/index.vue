<template>
  <demo-sort :cols="1">
    <Basic />
    <Bordered />
    <Vertical />
    <VerticalBorder />
  </demo-sort>
</template>

<script lang="ts">
import CN from '../index.md';
import Basic from './basic.vue';
import Bordered from './bordered.vue';
import Vertical from './vertical.vue';
import VerticalBorder from './vertical-border.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  components: {
    Basic,
    Bordered,
    Vertical,
    VerticalBorder
  }
})
</script>