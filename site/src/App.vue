<template>
  <a-config-provider>
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent, provide, watch, ref } from 'vue';
import type { Ref } from 'vue';
import { useRoute } from 'vue-router';
import useMediaQuery from './hooks/useMediaQuery';
import { GLOBAL_CONFIG } from './SymbolKey';

export interface GlobalConfig {
  responsive: Ref<null | 'narrow' | 'crowded'>;
  blocked: Ref<boolean>;
}
export default defineComponent({
  setup() {
    const route = useRoute();
    const colSize = useMediaQuery();
    const theme = ref(localStorage.getItem('theme') || 'default');
    const responsive = computed(() => {
      if (colSize.value === 'xs') {
        return 'crowded';
      } else if (colSize.value === 'sm') {
        return 'narrow';
      }
      return null;
    });
    const globalConfig: GlobalConfig = {
      responsive,
      blocked: ref(false),
    };
    const changeTheme = (t: string) => {
      theme.value = t;
      localStorage.setItem('theme', t);
    };
    provide('themeMode', {
      theme,
      changeTheme,
    });
    provide(GLOBAL_CONFIG, globalConfig);

    setTimeout(() => {
      const div = document.createElement('div');
      div.className = 'adsbox';
      document.body.appendChild(div);
      globalConfig.blocked.value = 'none' === getComputedStyle(div).display;
    }, 300);
    // watch(
    //   theme,
    //   () => {
    //     if (theme.value === 'dark') {
    //       document.getElementsByTagName('html')[0].setAttribute('data-doc-theme', 'dark');
    //       document.getElementsByTagName('body')[0].setAttribute('data-theme', 'dark');
    //       document.getElementsByTagName('html')[0].style.colorScheme = 'dark';
    //     } else {
    //       document.getElementsByTagName('html')[0].setAttribute('data-doc-theme', 'light');
    //       document.getElementsByTagName('body')[0].setAttribute('data-theme', 'light');
    //       document.getElementsByTagName('html')[0].style.colorScheme = 'light';
    //     }
    //   },
    //   { immediate: true },
    // );
    return { globalConfig };
  },
});
</script>
