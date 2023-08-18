<docs>
---
order: 4
title: 组合示例
---

## zh-CN

使用了 PageHeader 提供的所有能力。

</docs>

<template>
  <div class="components-page-header-demo-content">
    <j-page-header
      title="Title"
      class="site-page-header"
      sub-title="This is a subtitle"
      :avatar="{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }"
      :breadcrumb="{ routes }"
    >
      <template #tags>
        <j-tag color="blue">Running</j-tag>
      </template>
      <template #extra>
        <j-button key="3">Operation</j-button>
        <j-button key="2">Operation</j-button>
        <j-button key="1" type="primary">Primary</j-button>
        <j-dropdown key="more">
          <j-button :style="{ border: 'none', padding: 0 }">
            <EllipsisOutlined :style="{ fontSize: '20px', verticalAlign: 'top' }" />
          </j-button>
          <template #overlay>
            <j-menu>
              <j-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  1st menu item
                </a>
              </j-menu-item>
              <j-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  2nd menu item
                </a>
              </j-menu-item>
              <j-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  3rd menu item
                </a>
              </j-menu-item>
            </j-menu>
          </template>
        </j-dropdown>
      </template>
      <j-row class="content">
        <div style="flex: 1">
          <p>
            Ant Design interprets the color system into two levels: a system-level color system and
            a product-level color system.
          </p>
          <p>
            Ant Design&#x27;s design team preferred to design with the HSB color model, which makes
            it easier for designers to have a clear psychological expectation of color when
            adjusting colors, as well as facilitate communication in teams.
          </p>
          <div>
            <template v-for="item in iconLinks" :key="item.src">
              <a class="example-link">
                <img class="example-link-icon" :src="item.src" :alt="item.text" />
                {{ item.text }}
              </a>
            </template>
          </div>
        </div>
        <div class="image">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
            alt="content"
            style="width: 100%"
          />
        </div>
      </j-row>
    </j-page-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { EllipsisOutlined } from '@ant-design/icons-vue';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];

interface IconLink {
  src: string;
  text: string;
}
const iconLinks: IconLink[] = [
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg',
    text: 'Quick Start',
  },
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg',
    text: 'Product Info',
  },
  {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg',
    text: 'Product Doc',
  },
];

export default defineComponent({
  components: {
    EllipsisOutlined,
  },
  setup() {
    return {
      routes,
      iconLinks,
    };
  },
});
</script>
<style scoped>
#components-page-header-demo-content .image {
  margin: 0 0 0 60px;
  display: flex;
  align-items: center;
}

#components-page-header-demo-content .ant-page-header-rtl .image {
  margin: 0 60px 0 0;
}

#components-page-header-demo-content .example-link {
  line-height: 24px;
  margin-right: 16px;
}
[data-theme='compact'] #components-page-header-demo-content .example-link {
  line-height: 20px;
}
#components-page-header-demo-content .example-link-icon {
  margin-right: 8px;
}

[data-theme='compact'] #components-page-header-demo-content .example-link-icon {
  width: 20px;
  height: 20px;
}

#components-page-header-demo-content .ant-page-header-rtl .example-link {
  float: right;
  margin-right: 0;
  margin-left: 16px;
}
#components-page-header-demo-content .ant-page-header-rtl .example-link-icon {
  margin-right: 0;
  margin-left: 8px;
}
#components-page-header-demo-content .content p {
  margin-bottom: 1em;
  color: rgba(0, 0, 0, 0.85);
  overflow-wrap: break-word;
}

@media (max-width: 768px) {
  #components-page-header-demo-content .image {
    flex: 100%;
    margin: 24px 0 0;
  }
}
</style>
