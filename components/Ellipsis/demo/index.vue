<template>
  <demo-sort>
    <Basic/>
    <MaxRows/>
    <ExpandMethod/>
    <CustomizeStyle/>
  </demo-sort>
</template>

<script lang="ts">
import CN from "../index.md";
import Basic from "./basic.vue";
import MaxRows from "./max-rows.vue";
import ExpandMethod from "./expand-method.vue";
import CustomizeStyle from "./customize-style.vue";

export default {
  CN,
  components: {CustomizeStyle, ExpandMethod, MaxRows, Basic}
}
</script>
