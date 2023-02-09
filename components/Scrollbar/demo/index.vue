<template>
  <demo-sort>
    <Basic />
  </demo-sort>

  <demo-sort>
    <Transverse />
  </demo-sort>

  <demo-sort>
    <MaxHeight />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue'
import Transverse from './transverse.vue'
import MaxHeight from './maxHeight.vue'
import CN from '../index.md'
export default {
  CN,
  components: {
    Basic,
    Transverse,
    MaxHeight,
  }
}
</script>