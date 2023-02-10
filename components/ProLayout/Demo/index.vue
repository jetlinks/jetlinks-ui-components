<template>
  <demo-sort :cols="1">
    <Basic />
  </demo-sort>
</template>

<script lang="ts">
import CN from "../index.md";
import Basic from "./basic.vue";

export default {
  CN,
  components: {
    Basic,
  },
};
</script>

<style scoped>

</style>