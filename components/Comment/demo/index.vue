<template>
  <demo-sort>
    <basic />
    <list />
    <nested />
    <editor />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import List from './list.vue';
import Nested from './nested.vue';
import Editor from './editor.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  components: {
    Basic,
    List,
    Nested,
    Editor,
  },
  setup() {
    return {};
  },
});
</script>
