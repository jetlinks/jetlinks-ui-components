<template>
  <demo-sort :cols="1">
    <Basic />
    <AdvancedSearch />
  </demo-sort>
</template>

<script>
import CN from "../index.md";
import Basic from "./basic.vue";
import AdvancedSearch from './Advanced.vue'
export default {
  CN,
  components: {
    Basic,
    AdvancedSearch
  },
}
</script>

<style scoped>

</style>