<template>
  <demo-sort>
    <Horizontal />
    <Vertical />
    <WithText />
    <CustomizeStyle />
  </demo-sort>
</template>

<script lang="ts">
import CN from "../index.md";
import Horizontal from "./horizontal.vue";
import Vertical from "./vertical.vue";
import WithText from "./with-text.vue";
import CustomizeStyle from "./customize-style.vue";

export default {
  CN,
  components: {
    CustomizeStyle,
    WithText,
    Vertical,
    Horizontal,
  }
}
</script>