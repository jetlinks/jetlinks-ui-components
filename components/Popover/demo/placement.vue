<docs>
---
order: 2
title: 位置
---

## zh-CN

位置有十二个方向。

</docs>
<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <j-popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>TL</j-button>
      </j-popover>
      <j-popover placement="top">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>Top</j-button>
      </j-popover>
      <j-popover placement="topRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>TR</j-button>
      </j-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <j-popover placement="leftTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>LT</j-button>
      </j-popover>
      <j-popover placement="left">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>Left</j-button>
      </j-popover>
      <j-popover placement="leftBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>LB</j-button>
      </j-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <j-popover placement="rightTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>RT</j-button>
      </j-popover>
      <j-popover placement="right">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>Right</j-button>
      </j-popover>
      <j-popover placement="rightBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>RB</j-button>
      </j-popover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <j-popover placement="bottomLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>BL</j-button>
      </j-popover>
      <j-popover placement="bottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>Bottom</j-button>
      </j-popover>
      <j-popover placement="bottomRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <j-button>BR</j-button>
      </j-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: ref<number>(70),
    };
  },
});
</script>
<style>
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
