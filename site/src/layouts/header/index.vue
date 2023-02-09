<template>
  <header id="header" :class="headerClassName">

    <a-row :style="{ flexFlow: 'nowrap', height: 64 }">
      <a-col v-bind="colProps[0]">
        <Logo />
      </a-col>
      <a-col v-bind="colProps[1]" class="menu-row">
        <Menu />
      </a-col>
    </a-row>
  </header>
</template>
<script lang="ts">
import type { GlobalConfig } from '../../App.vue';
import { GLOBAL_CONFIG } from '../../SymbolKey';
import { getLocalizedPathname } from '../../utils/util';
import { computed, defineComponent, inject, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Logo from './Logo.vue';
import { UnorderedListOutlined, CloseOutlined } from '@ant-design/icons-vue';
import SearchBox from './SearchBox.vue';
export default defineComponent({
  components: {
    Logo,
    UnorderedListOutlined,
    SearchBox,
    CloseOutlined,
  },
  setup() {
    const route = useRoute();
    const globalConfig = inject<GlobalConfig>(GLOBAL_CONFIG);
    const isHome = computed(() => {
      return ['', 'index', 'index-cn'].includes(route.path);
    });

    const menuVisible = ref(false);
    const colProps = isHome.value
      ? [{ flex: 'none' }, { flex: 'auto' }]
      : [
          {
            xxxl: 4,
            xxl: 4,
            xl: 5,
            lg: 6,
            md: 6,
            sm: 24,
            xs: 24,
          },
          {
            xxxl: 20,
            xxl: 20,
            xl: 19,
            lg: 18,
            md: 18,
            sm: 0,
            xs: 0,
          },
        ];
    const searching = ref(false);
    const onTriggerSearching = (value: boolean) => {
      searching.value = value;
    };

    const visibleAdblockBanner = ref(false);
    watch(globalConfig?.blocked, val => {
      visibleAdblockBanner.value = val;
    });

    return {
      responsive: globalConfig.responsive,
      getLocalizedPathname,
      visibleAdblockBanner,
      headerClassName: {
        clearfix: true,
        'home-header': isHome.value,
      },
      colProps,
      menuVisible,
      onTriggerSearching,
    };
  },
});
</script>
<style lang="less" src="./index.less"></style>
<style scope>
.adblock-banner,
.alert-banner {
  position: relative;
  z-index: 100;
  padding: 16px;
  line-height: 28px;
  color: #8590a6;
  text-align: center;
  background-color: #ebebeb;
}
.alert-banner {
  background-color: var(--ant-primary-color);
  color: #fff;
  padding: 5px;
}
.alert-banner a {
  color: #fff;
  text-decoration: underline;
}
.alert-banner .close-icon {
  top: 12px;
}
.close-icon {
  position: absolute;
  top: 15px;
  right: 15px;
}
</style>
