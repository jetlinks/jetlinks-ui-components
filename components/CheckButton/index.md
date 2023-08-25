---
category: Components
subtitle: 选择按钮
type: 数据录入
title: Checkbutton
---

## API

### 属性

#### CheckButton

| 参数     | 说明                            | 类型                                                         | 默认值 | 版本 |
| -------- | ------------------------------- | ------------------------------------------------------------ | ------ | ---- |
| multiple | 多选                            | boolean                                                      | false  |      |
| disabled | 失效状态                        | boolean                                                      | false  |      |
| value    | 与 CheckboxGroup 组合使用时的值 | boolean \| string \| number                                  | -      |      |
| options  | 选择项                          | Array&lt;{ label: string value: string disabled?: boolean }> | \[]    |      |
| class | 类名 | string | undefined | - |
| style | css样式 | CSSProperties | {} | - |

#### 事件

| 事件名称 | 说明           | 回调参数              | 默认值  |版本                    |     |
| -------- | -------------- | --------------------- | ----------------------- | --- | --- |
| change   | 变化时回调函数 | Function(keys: string | string[], nodes: any[]) | -   |     |
