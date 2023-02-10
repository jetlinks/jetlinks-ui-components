<template>
  <demo-sort :cols="1">
    <Basic />
    <MoreActions />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import MoreActions from './more-actions.vue';
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    MoreActions
  }
}
</script>