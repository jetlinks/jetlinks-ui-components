<template>
  <demo-sort :cols="1">
    <Basic />
    <Accordion />
    <Mix />
    <Borderless />
    <Custom />
    <Noarrow />
    <Extra />
    <Ghost />
  </demo-sort>
</template>

<script>
import Accordion from './accordion.vue';
import Basic from './basic.vue';
import Borderless from './borderless.vue';
import Custom from './custom.vue';
import Mix from './mix.vue';
import Noarrow from './noarrow.vue';
import Extra from './extra.vue';
import Ghost from './ghost.vue';
import CN from '../index.md';

export default {
  CN,
  components: {
    Accordion,
    Basic,
    Borderless,
    Custom,
    Mix,
    Noarrow,
    Extra,
    Ghost,
  },
};
</script>
