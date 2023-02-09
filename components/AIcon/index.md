---
category: Components
subtitle: 图标
cols: 1
type: 通用
title: Icon
cover: https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg
---

## API

```html
<j-aicon type="ZoomOutOutlined" />
```

### 通用图标

| 参数 | 说明     | 类型   | 默认值          | 版本 |
| ---- | -------- | ------ | --------------- | ---- |
| type | 图标类型 | string | ZoomOutOutlined |      |

> 支持 antd 官方全部图标，使用大驼峰命名

其中我们提供了三种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。

### 自定义图标

在 `1.2.0` 之后，antd 提供了一个 `createFromIconfontCN` 方法，方便开发者调用在 [iconfont.cn](http://iconfont.cn/) 上自行管理的图标。

> 不支持自定义图标，需要自行封装

```jsx
import { createFromIconfontCN } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
const MyIcon = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // 在 iconfont.cn 上生成
});

export default defineComponent({
    setup() {
        return () => <MyIcon type="icon-dianzan" />;
    },
});
```
