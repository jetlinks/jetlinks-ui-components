<template>
  <demo-sort :cols="1">
    <Basic />
    <Extra />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import Extra from './extra.vue'
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    Extra
  }
}
</script>