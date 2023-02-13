---
category: Components
subtitle: 自动完成
type: 数据录入
cols: 2
title: AutoComplete
cover: https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg
---

输入框自动完成功能。

## 何时使用

- 需要一个输入框而不是选择器。
- 需要输入建议/辅助提示。

和 Select 的区别是：

- AutoComplete 是一个带提示的文本输入框，用户可以自由输入，关键词是辅助**输入**。
- Select 是在限定的可选项中进行选择，关键词是**选择**。

## API

```html
<j-auto-complete v-model:value="value" :options="options" />
```

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| width | 宽度 | string | 200px |  |
| allowClear | 支持清除, 单选模式有效 | boolean | false |  |
| autofocus | 自动获取焦点 | boolean | false |  |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| default (自定义输入框) | 自定义输入框 | slot | `<Input />` |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项。 | boolean | true |  |
| defaultOpen | 是否默认展开下拉菜单 | boolean | - |  |
| disabled | 是否禁用 | boolean | false |  |
| dropdownMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。false 时会关闭虚拟滚动 | boolean \| number | true |  |
| dropdownMenuStyle | dropdown 菜单自定义样式 | object |  | 1.5.0 |
| filterOption | 是否根据输入项进行筛选。当其为一个函数时，会接收 `inputValue` `option` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | boolean or function(inputValue, option) | true |  |
| open | 是否展开下拉菜单 | boolean | - |  |
| option | 通过 option 插槽，自定义节点 | v-slot:option="{value, label, [disabled, key, title]}" | - | 3.0 |
| options | 自动完成的数据源 | [DataSourceItemType](https://github.com/vueComponent/ant-design-vue/blob/724d53b907e577cf5880c1e6742d4c3f924f8f49/components/auto-complete/index.vue#L9)\[] |  |  |
| placeholder | 输入框提示 | string \| slot | - |  |
| v-model:value | 指定当前选中的条目 | string\|string\[]\|{ key: string, label: string\|vNodes }\|Array&lt;{ key: string, label: string\|vNodes }> | 无 |  |
