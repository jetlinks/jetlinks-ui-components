---
category: Components
subtitle: 表格卡片
cols: 2
type: 导航
title: TableCard
cover: https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg
---

## API

## TableCard

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| name | 卡片标题 | string | - |  |
| width | 卡片高度 | string | 400px |  |
| content | 卡片内容插槽 | slot | - |  |
| actions | 卡片下方按钮，最多显示三个按钮 ，按钮图标引用ICON组件，可自定义 |  []{name: string, icon: string, key: string, disabled: string, onClick: Function} | - |  |
| moreActions| 卡片隐藏按钮 | 同actions | - |  |
| status | 卡片右上角状态 | {text: string, value: string, color: string} | - |   |