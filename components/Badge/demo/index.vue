<template>
  <demo-sort>
    <Basic />
    <NoWapper />
    <Overflow />
    <Dot />
    <Status />
    <Change />
    <Title />
    <Colors />
    <Ribbon />
    <Link />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import NoWapper from './no-wrapper.vue';
import Dot from './dot.vue';
import Change from './change.vue';
import Overflow from './overflow.vue';
import Status from './status.vue';
import Title from './title.vue';
import Colors from './colors.vue';
import Link from './link.vue';
import Ribbon from './ribbon.vue';
import CN from './../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    NoWapper,
    Overflow,
    Dot,
    Status,
    Change,
    Title,
    Colors,
    Link,
    Ribbon,
  },
});
</script>

<style>
[id^='components-Badge-demo-'] .ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
[id^='components-Badge-demo-'] .head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
[id^='components-Badge-demo-'] .ant-badge-not-a-wrapper:not(.ant-badge-status) {
  margin-right: 8px;
}
</style>
