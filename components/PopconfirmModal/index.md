---
category: Components
type: 反馈
title: PopconfirmModal
subtitle: 气泡确认模态框
cover: https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg
cols: 1
---

点击元素，弹出气泡式的确认框。

## API

### 基本用法

| 参数       | 说明                        | 类型      | 默认值  | 版本 |
| ---------- | --------------------------- |---------|------| --- |
| cancelText | 取消按钮文字                | string  | 取消   |     |
| okText     | 确认按钮文字                | string  | 确定   |     |
| title      | 卡片标题                | string \| `Slot` | 无   |      |

更多属性请参考 [Tooltip](/components/tooltip/#API)。
### 事件

| 事件名称      | 说明           | 回调参数          |
| ------------- | -------------- | ----------------- |
| cancel        | 点击取消的回调 | function(e)       |
| confirm       | 点击确认的回调 | function(e)       |
| visibleChange | 显示隐藏的回调 | function(visible) |