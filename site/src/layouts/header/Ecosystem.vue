<template>
  <a-menu class="ecosystem">
    <a-menu-item-group key="ecosystem" :title="$t('app.header.menu.ecosystem')">
      <a-menu-item key="pro">
        <a target="_blank" href="https://pro.antdv.com">Pro For Vue2(Free)</a>
      </a-menu-item>
      <a-menu-item key="vip">
        <a target="_blank" href="https://store.antdv.com/pro">Pro For Vue3(VIP)</a>
      </a-menu-item>
      <a-menu-item key="design">
        <router-link :to="getLocalizedPathname('/docs/vue/download/')">
          设计资源
        </router-link>
      </a-menu-item>
    </a-menu-item-group>
  </a-menu>
</template>
<script lang="ts">
import { computed, defineComponent, inject } from 'vue';
import type { GlobalConfig } from '../../App.vue';
import { GLOBAL_CONFIG } from '../../SymbolKey';
import { getLocalizedPathname } from '../../utils/util';

export default defineComponent({
  props: {
    isRTL: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const downstyle = computed(() => (props.isRTL ? '-1px 2px 0 0' : '-1px 0 0 2px'));
    return {
      downstyle,
      getLocalizedPathname,
    };
  },
});
</script>
<style scoped>
.ecosystem a {
  color: rgba(0, 0, 0, 0.65);
}
</style>
