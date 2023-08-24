<template>
  <demo-sort :cols="1">
    <Locale />
    <Size />
    <Direction />
    <Theme />
  </demo-sort>
</template>

<script>
import Locale from './locale.vue';
import Size from './size.vue';
import Direction from './direction.vue';
import Theme from './theme.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  components: {
    Locale,
    Size,
    Theme,
    Direction,
  },
});
</script>
