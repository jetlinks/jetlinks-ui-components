---
category: Components
type: 反馈
title: Popconfirm
subtitle: 气泡确认框
cover: https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg
cols: 1
---

点击元素，弹出气泡式的确认框。

## 何时使用

目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。和 'confirm' 弹出的全屏居中模态对话框相比，交互形式更轻量。

## API

### 基本用法

| 参数       | 说明                        | 类型        | 默认值                    | 版本 |
| ---------- | --------------------------- | ----------- | ------------------------- | ---- |
| cancelText | 取消按钮文字                | string      | 取消                      |      |
| okText     | 确认按钮文字                | string      | 确定                      |      |
| title      | 确认框的描述                | string      | 无                        |      |
| loading    | 确定后是否显示 loading 状态 | boolean     | false                     |      |
| confirm    | 点击确认的回调              | function(e) | () => {console.log('ok')} |      |

> 设置了`title`默认值，完全自定义了取消和确认按钮，title 和按钮部分相关 API 可能会失效，如需不满足需求使用 andt 官方用法

### antd 用法

| 参数              | 说明                                     | 类型                                   | 默认值                                | 版本 |
| ----------------- | ---------------------------------------- | -------------------------------------- | ------------------------------------- | ---- |
| cancelButton      | 完全自定义取消按钮                       | slot                                   | -                                     | 3.0  |
| cancelButtonProps | cancel 按钮 props                        | [ButtonProps](/components/button/#API) | -                                     |      |
| cancelText        | 取消按钮文字                             | string\|slot                           | 取消                                  |      |
| disabled          | 点击 Popconfirm 子元素是否弹出气泡确认框 | boolean                                | false                                 |      |
| icon              | 自定义弹出气泡 Icon 图标                 | vNode                                  | &lt;Icon type="exclamation-circle" /> |      |
| okButton          | 完全自定义确认按钮                       | slot                                   | -                                     | 3.0  |
| okButtonProps     | ok 按钮 props                            | [ButtonProps](/components/button/#API) | -                                     |      |
| okText            | 确认按钮文字                             | string\|slot                           | 确定                                  |      |
| okType            | 确认按钮类型                             | string                                 | primary                               |      |
| showCancel        | 是否显示取消按钮                         | boolean                                | true                                  | 3.0  |
| title             | 确认框的描述                             | string\|slot                           | 无                                    |      |
| visible (v-model) | 是否显示                                 | boolean                                | -                                     |      |

### 事件

| 事件名称      | 说明           | 回调参数          |
| ------------- | -------------- | ----------------- |
| cancel        | 点击取消的回调 | function(e)       |
| confirm       | 点击确认的回调 | function(e)       |
| visibleChange | 显示隐藏的回调 | function(visible) |

更多属性请参考 [Tooltip](/components/tooltip-cn/#API)。

## 注意

请确保 `Popconfirm` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。
