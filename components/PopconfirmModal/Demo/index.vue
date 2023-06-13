<template>
  <demo-sort>
    <basic />
    <Double />
    <Show />
    <Loading />
  </demo-sort>
</template>

<script>
import CN from '../index.md';
import {defineComponent} from "vue";
import Basic from './basic.vue'
import Double from './double.vue'
import Show from './show.vue'
import Loading from './loading.vue'

export default defineComponent({
  CN,
  components: {
    Basic,
    Double,
    Show,
    Loading,
  },
});
</script>

<style scoped>

</style>