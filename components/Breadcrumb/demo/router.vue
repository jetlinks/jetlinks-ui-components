<docs>
---
order: 3
iframe: 200
reactRouter: react-router-dom
title: 其它路由
---

## zh-CN
和 `vue-router` 进行结合使用。

</docs>

<template>
  <div>
    <j-breadcrumb :routes="routes">
      <template #itemRender="{ route, paths }">
        <span v-if="routes.indexOf(route) === routes.length - 1">
          {{ route.breadcrumbName }}
        </span>
        <router-link v-else :to="`${basePath}/${paths.join('/')}`">
          {{ route.breadcrumbName }}
        </router-link>
      </template>
    </j-breadcrumb>
    <br />
    {{ $route.path }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
interface Route {
  path: string;
  breadcrumbName: string;
  children?: Array<{
    path: string;
    breadcrumbName: string;
  }>;
}
export default defineComponent({
  setup() {
    const routes = ref<Route[]>([
      {
        path: 'index',
        breadcrumbName: 'home',
      },
      {
        path: 'first',
        breadcrumbName: 'first',
        children: [
          {
            path: '/general',
            breadcrumbName: 'General',
          },
          {
            path: '/layout',
            breadcrumbName: 'Layout',
          },
          {
            path: '/navigation',
            breadcrumbName: 'Navigation',
          },
        ],
      },
      {
        path: 'second',
        breadcrumbName: 'second',
      },
    ]);
    return {
      basePath: '/components/breadcrumb',
      routes,
    };
  },
});
</script>
