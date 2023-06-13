<template>
  <demo-sort>
    <basic />
    <Double />
  </demo-sort>
</template>

<script>
import CN from '../index.md';
import {defineComponent} from "vue";
import Basic from './basic.vue'
import Double from './double.vue'

export default defineComponent({
  CN,
  components: {
    Basic,
    Double
  },
});
</script>

<style scoped>

</style>