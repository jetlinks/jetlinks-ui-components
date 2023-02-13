<template>
  <Basic />
</template>

<script lang="ts">
import CN from "../index.md";
import Basic from "./basic.vue";
import { provide } from 'vue';

export default {
  CN,
  components: {
    Basic,
  },
  props: {
    iframeName: String,
  },
  setup(props) {
    console.log(props)
    provide(
        'iframeDemo',
        !props.iframeName
            ? {
              'ProLayout': '/iframe/layout/#ProLayout'
            }
            : {},
    );
  },
};
</script>

<style scoped>

</style>