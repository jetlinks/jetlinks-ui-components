<template>
  <demo-sort>
    <Basic />
    <Customize />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import Customize from './customize.vue'
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    Customize
  }
}
</script>