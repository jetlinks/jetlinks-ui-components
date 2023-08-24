---
category: Components
title: CardSelect
subtitle: 卡片选择器
cols: 2
type: 数据录入
order: 2
---

卡片选择框。

## 何时使用

-   对于单个或多个类型选择。

## API

### CardSelect

| 参数     | 说明                                                       | 类型      | 默认值                                                                                            | 版本     |
| -------- | ---------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------- | -------- | --- |
| value    | v-model 绑定                                               | `string   | string[]`                                                                                         | -        | -   |
| type     | 以配置形式设置布局方式                                     | `vertical | horizontal `                                                                                      | horizontal | -   |
| options  | 以配置形式设置子元素                                       | Array     | `Array<{value:string number label: string subLabel?: string iconUrl: string disabled?: boolean}>` | -        |
| disabled | 禁选所有子单选器，单项禁用在 options 中设置`disabled=true` | boolean   | false                                                                                             | -        |
| multiple | 是否多选                                                   | boolean   | false                                                                                             | -        |
| float | 文本浮动方向，不可以与type="vertical"同时使用 | `left | right` | left | - |
| column | 每行显示子元素个数，如果设置的数值超过子元素个数，则使用默认值 | Number | 3 | - |
| noColumn | 是否使设置的column失效 | boolean | false | - |
| showImage | 是否显示Image | boolean | true | - |
| showSubLabel | 是否显示subLabel | boolean | true | - |
| allowClear | 单选的情况下是否可以取消选择 | boolean | false | - |

### CardSelectOption

| 参数     | 说明     | 类型    | 默认值 | 版本 |
| -------- | -------- | ------- | ------ | ---- | --- |
| value    | 绑定值   | string  | -      | -    |
| label    | label    | `string | slot`  | -    | -   |
| subLabel | subLabel | `string | slot`  | -    | -   |
| image    | 图片地址 | `string | slot`  | -    | -   |
