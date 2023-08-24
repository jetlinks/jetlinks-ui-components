<template>
  <demo-sort>
    <Basic />
    <InputNumber />
    <IconSlider />
    <TipFormatter />
    <Event />
    <Mark />
    <Vertical />
    <ShowTooltip />
    <Reverse />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import InputNumber from './input-number.vue';
import IconSlider from './icon-slider.vue';
import TipFormatter from './tip-formatter.vue';
import Event from './event.vue';
import Mark from './mark.vue';
import Vertical from './vertical.vue';
import ShowTooltip from './show-tooltip.vue';
import Reverse from './reverse.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    InputNumber,
    IconSlider,
    TipFormatter,
    Event,
    Mark,
    Vertical,
    ShowTooltip,
    Reverse,
  },
  setup() {
    return {};
  },
});
</script>
