<template>
  <basic />
  <simple />
  <loadmore />
  <vertical />
  <grid />
  <resposive />
</template>
<script lang="ts">
import Basic from './basic.vue';
import Simple from './simple.vue';
import Loadmore from './loadmore.vue';
import Vertical from './vertical.vue';
import Grid from './grid.vue';
import Resposive from './resposive.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  components: {
    Basic,
    Simple,
    Loadmore,
    Vertical,
    Grid,
    Resposive,
  },
  setup() {
    return {};
  },
});
</script>
