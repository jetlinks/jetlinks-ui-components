<template>
  <demo-sort>
    <basic />
    <static />
    <on-click />
    <customize-highlight />
    <target-offset />
    <on-change />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Static from './static.vue';
import OnClick from './onClick.vue';
import CustomizeHighlight from './customizeHighlight.vue';
import TargetOffset from './targetOffset.vue';
import OnChange from './onChange.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Static,
    OnClick,
    CustomizeHighlight,
    TargetOffset,
    OnChange,
  },
  setup() {
    return {};
  },
});
</script>
