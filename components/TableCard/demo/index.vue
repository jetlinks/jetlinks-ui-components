<template>
  <demo-sort>
    <Basic />
    <MoreActions />
  </demo-sort>
  <demo-sort :cols="1">
    <Status />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import MoreActions from './more-actions.vue';
import Status from './Status.vue';
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    MoreActions,
    Status
  }
}
</script>