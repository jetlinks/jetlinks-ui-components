<template>
  <demo-sort>
    <basic />
    <type />
    <dynamic />
    <badge />
    <group />
    <responsive />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Type from './type.vue';
import Dynamic from './dynamic.vue';
import Badge from './badge.vue';
import Group from './group.vue';
import Responsive from './responsive.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Type,
    Dynamic,
    Badge,
    Group,
    Responsive,
  },
  setup() {
    return {};
  },
});
</script>

<style>
[id^='components-Avatar-demo-'] .ant-avatar {
  margin-top: 16px;
  margin-right: 16px;
}
</style>
