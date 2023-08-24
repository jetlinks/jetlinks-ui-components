<template>
  <demo-sort :cols="1">
    <Basic />
    <Card />
    <NoticeCalendar />
    <Select />
    <CustomizeHeader />
  </demo-sort>
</template>

<script lang="ts">
import Basic from './basic.vue';
import Card from './card.vue';
import NoticeCalendar from './notice-calendar.vue';
import Select from './select.vue';
import CustomizeHeader from './customize-header.vue';
import CN from '../index.md';
import { defineComponent } from 'vue';

export default defineComponent({
  CN,
  components: {
    Basic,
    Card,
    NoticeCalendar,
    Select,
    CustomizeHeader,
  },
});
</script>
