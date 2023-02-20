---
category: Components
type: 数据录入
title: ColorPicker
subtitle: 颜色选择器
cols: 1
cover: https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg
---

## API

### ColorPicker

| 参数           | 说明                                          | 类型            | 默认值        | 版本 |
| -------------- | --------------------------------------------- | --------------- | ------------- | ---- |
| default-color  | 初始化颜色值(使用 16 进制值)                  | string          | #000000       | -    |
| hex(v-model)   | 初始化颜色值(双向数据绑定, 使用 16 进制值)    | string          | #000000       | -    |
| rgba(v-model)  | 初始化颜色值(双向数据绑定, 使用 RGBA 字符串） | string          | rgba(0,0,0,1) | -    |
| size           | 尺寸, 可选值: large/small/mini                | string          | mini          | -    |
| opacity        | 颜色透明度初始值(0~1 数值越小透明度越低)      | numer           | 1             | -    |
| show-opacity   | 是否显示透明度控制块                          | boolean         | true          |
| standard-color | 标准色初始化配置(使用完整的 hex16 进制值)     | `Array<string>` |               | -    |
| theme-color    | 主题色初始化配置(使用完整的 hex16 进制值)     | `Array<string>` |               | -    |

> 注意点：
>
> -   初始值优先级： default-color < hex < rgba

## Events

| 事件名 | 描述             | 参数                            | 返回值 |
| ------ | ---------------- | ------------------------------- | ------ |
| change | 颜色值改变时触发 | data: {hex:string,rgba: string} | -      |
| finish | 点击完成按钮     | data: {hex:string,rgba: string} | -      |
| close  | 选色面板关闭     | data: {hex:string,rgba: string} | -      |
