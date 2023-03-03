<template>
  <demo-sort :cols="1">
    <Basic />
    <Position />
    <Fade />
    <Autoplay />
    <CustomPaging />
    <CustomArrows />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Fade from './fade.vue';
import Autoplay from './autoplay.vue';
import Position from './position.vue';
import CustomPaging from './customPaging.vue';
import CustomArrows from './customArrows.vue';

import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Fade,
    Autoplay,
    Position,
    CustomPaging,
    CustomArrows,
  },
});
</script>
