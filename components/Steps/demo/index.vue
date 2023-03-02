<template>
  <demo-sort :cols="1">
    <Simple />
    <SmallSize />
    <Icon />
    <StepNext />
    <Vertical />
    <VerticalSmall />
    <Error />
    <ProgressDot />
    <CustomizedProgressDot />
    <Clickable />
    <Nav />
    <Progress />
  </demo-sort>
</template>
<script lang="ts">
import CustomizedProgressDot from './customized-progress-dot.vue';
import Error from './error.vue';
import Icon from './icon.vue';
import ProgressDot from './progress-dot.vue';
import Simple from './simple.vue';
import SmallSize from './small-size.vue';
import StepNext from './step-next.vue';
import VerticalSmall from './vertical-small.vue';
import Vertical from './vertical.vue';
import Clickable from './clickable.vue';
import Progress from './progress.vue';
import Nav from './nav.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Simple,
    SmallSize,
    Icon,
    StepNext,
    Vertical,
    VerticalSmall,
    Error,
    ProgressDot,
    CustomizedProgressDot,
    Clickable,
    Nav,
    Progress,
  },
  setup() {
    return {};
  },
});
</script>
