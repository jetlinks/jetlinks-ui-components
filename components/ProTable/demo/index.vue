<template>
  <demo-sort :cols="1">
    <Scroll />
    <Basic />
    <Promise />
    <Selection />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import Promise from './promise.vue'
import Selection from './selection.vue'
import Scroll from './scroll.vue'
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    Promise,
    Selection,
    Scroll
  }
}
</script>