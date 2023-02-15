---
category: Components
title: Ellipsis
subtitle: 文本省略
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original
cols: 2
type: 布局
order: 3
---

内容超长显示省略号。

## 何时使用

- 单行或多行文本超出一定宽度后显示省略号，并且可以给予提示。

## API

| 参数             | 说明             | 类型        | 默认值             | 版本     |
|----------------|----------------|-----------|-----------------|--------|
| expand-trigger | 展开的触发方式        | 'click'   | -               |        |
| line-clamp     | 最大行数           | `number` \| `string`        | -      |  |
| tooltip        | Tooltip 的属性或内容 | `boolean` \| `TooltipProps`\| `Slot` | -   |  |