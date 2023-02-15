---
category: Components
title: Card
subtitle: 卡片选择框
cols: 2
type: 数据录入
order: 2
---

卡片选择框。

## 何时使用

- 对于单个或多个类型选择。

## API

| 参数       | 说明                                      | 类型        | 默认值                                                                                               | 版本       |
|----------|-----------------------------------------|-----------|---------------------------------------------------------------------------------------------------|----------|
| type     | 以配置形式设置子元素                              | `vertical | horizontal  `                                                                                     | vertical | -   |
| float    | 只有设置了`type='horizontal'`才生效             | `left     | right `                                                                                           | left     | -           |
| options  | 以配置形式设置子元素                              | Array     | `Array<{value:string number label: string subLabel?: string iconUrl: string disabled?: boolean}>` | -        |
| size     | 大小                                      | `large    | middle                                                                                            | small`   |   middle | - |                                                                                      | -        |
| disabled | 禁选所有子单选器，单项禁用在options中设置`disabled=true` | boolean   | false                                                                                             | -        |
| multiple | 是否多选                                    | boolean   | false                                                                                             | -        |