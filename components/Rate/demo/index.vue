<template>
  <demo-sort>
    <basic />
    <half />
    <Text />
    <disabled />
    <clear />
    <character />
  </demo-sort>
</template>

<script>
import Basic from './basic.vue';
import Half from './half.vue';
import Text from './text.vue';
import Disabled from './disabled.vue';
import Clear from './clear.vue';
import Character from './character.vue';

import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Half,
    Text,
    Disabled,
    Clear,
    Character,
  },
});
</script>
