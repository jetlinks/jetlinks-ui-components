<docs>
---
order: 8
title: 带页签的卡片
---

## zh-CN

可承载更多内容

</docs>

<template>
  <j-card
    style="width: 100%"
    title="Card title"
    :tab-list="tabList"
    :active-tab-key="key"
    @tabChange="key => onTabChange(key, 'key')"
  >
    <template #customTab="item">
      <span v-if="item.key === 'tab1'">
        <home-outlined />
        {{ item.key }}
      </span>
    </template>
    <template #extra>
      <a href="#">More</a>
    </template>
    {{ contentList[key] }}
  </j-card>
  <br />
  <br />
  <j-card
    style="width: 100%"
    :tab-list="tabListNoTitle"
    :active-tab-key="noTitleKey"
    @tabChange="key => onTabChange(key, 'noTitleKey')"
  >
    <p v-if="noTitleKey === 'article'">article content</p>
    <p v-else-if="noTitleKey === 'app'">app content</p>
    <p v-else>project content</p>
    <template #tabBarExtraContent>
      <a href="#">More</a>
    </template>
  </j-card>
</template>

<script lang="ts">
import { HomeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    HomeOutlined,
  },
  setup() {
    const tabList = [
      {
        key: 'tab1',
        tab: 'tab1',
      },
      {
        key: 'tab2',
        tab: 'tab2',
      },
    ];
    const contentList = {
      tab1: 'content1',
      tab2: 'content2',
    };
    const tabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];
    const key = ref('tab1');
    const noTitleKey = ref('app');

    const onTabChange = (value: string, type: string) => {
      console.log(value, type);
      if (type === 'key') {
        key.value = value;
      } else if (type === 'noTitleKey') {
        noTitleKey.value = value;
      }
    };

    return {
      tabList,
      contentList,
      tabListNoTitle,
      key,
      noTitleKey,
      onTabChange,
    };
  },
});
</script>
