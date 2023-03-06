<template>
  <demo-sort>
    <basic />
    <async />
    <prefix />
    <readonly />
    <placement />
    <FormMentions />
  </demo-sort>
</template>
<script>
import Basic from './basic.vue';
import Async from './async.vue';
import FormMentions from './form.vue';
import Prefix from './prefix.vue';
import Readonly from './readonly.vue';
import Placement from './placement.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Async,
    Prefix,
    Readonly,
    Placement,
    FormMentions,
  },
});
</script>
