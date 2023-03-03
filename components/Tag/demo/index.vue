<template>
  <demo-sort>
    <Basic />
    <Checkable />
    <Colorful />
    <Control />
    <Controlled />
    <HotTags />
    <Icon />
    <Status />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Checkable from './checkable.vue';
import Colorful from './colorful.vue';
import Control from './control.vue';
import Controlled from './controlled.vue';
import HotTags from './hot-tags.vue';
import Icon from './icon.vue';
import Status from './status.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Checkable,
    Colorful,
    Control,
    Controlled,
    HotTags,
    Icon,
    Status,
  },
});
</script>
