<template>
  <demo-sort>
    <basic />
    <overlay />
    <router />
    <separator />
    <separator-indepent />
    <with-icon />
  </demo-sort>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CN from './../index.md';
import Basic from './basic.vue';
import Overlay from './overlay.vue';
import Router from './router.vue';
import Separator from './separator.vue';
import SeparatorIndepent from './separator-indepent.vue';
import WithIcon from './withIcon.vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Overlay,
    Router,
    Separator,
    SeparatorIndepent,
    WithIcon,
  },
});
</script>
