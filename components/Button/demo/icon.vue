<docs>
---
order: 1
title: 图标按钮
---
  
  ## zh-CN
  
  当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
  
  如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
  
  </docs>

<template>
    <Space>
        <j-button type="text" myIcon="ImportOutlined">导入</j-button>
        <j-button type="primary">
            <AIcon type="DownloadOutlined" />Primary
        </j-button>
        <j-button danger type="primary">Primary</j-button>
        <j-button danger type="icon-danger" shape="circle">
            <template #icon>
                <AIcon type="DeleteOutlined" />
            </template>
        </j-button>
        <j-button type="primary">
            <AIcon type="ImportOutlined" />
            导入
        </j-button>
        <j-button type="primary" shape="circle">
            <AIcon type="SearchOutlined" />
        </j-button>
        <j-button>
            Search
            <AIcon type="SearchOutlined" />
        </j-button>
        <j-button type="dashed" shape="circle">
            <AIcon type="SearchOutlined" />
        </j-button>
        <j-button type="dashed">
            <AIcon type="SearchOutlined" />
            Search
        </j-button>
        <j-button myIcon="StepBackwardFilled"></j-button>
    </Space>
</template>
<script lang="ts">
import { Space } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        SearchOutlined,
        Space,
    },
};
</script>
<style lang="less" scoped></style>
