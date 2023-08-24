<template>
  <demo-sort>
    <basic />
    <unit />
    <card />
    <countdown />
    <countdown-slot />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Unit from './unit.vue';
import Card from './card.vue';
import Countdown from './countdown.vue';
import CountdownSlot from './countdown-slot.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  components: {
    Basic,
    Unit,
    Card,
    Countdown,
    CountdownSlot,
  },
  setup() {
    return {};
  },
});
</script>
