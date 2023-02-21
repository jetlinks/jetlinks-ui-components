---
category: Components
subtitle: 图标
cols: 1
type: 通用
title: Icon
cover: https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg
---

## API

其中我们提供了三种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。
更多 antd 官方图标参考 https://www.antdv.com/components/icon-cn

```html
<j-aIcon type="UpCircleOutlined" />
<j-aIcon type="UpCircleFilled" />
<j-aIcon type="UpCircleTwoTone" />
```

### 通用图标

| 参数      | 说明           | 类型   | 默认值                                     | 版本 |
| --------- | -------------- | ------ | ------------------------------------------ | ---- |
| type      | 图标类型       | string | ZoomOutOutlined                            |      |
| scriptUrl | 自定义图标地址 | string | //at.alicdn.com/t/font_8d5l8fzk5b87iudi.js |      |

> 支持 antd 官方全部图标，官网图标使用大驼峰命名，自定义图标使用小写短横线写法

### 自定义图标

> 自定义图标，需要需要传入`scriptUrl`,默认地址`'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'`

```jsx
<j-aIcon type="icon-xiazai" scriptUrl="/public/iconfont.js" />
<j-aIcon type="icon-dianzan" />
```
