---
category: Components
type: 数据录入
title: MonacoEditor
subtitle: 代码编辑器
cols: 1
cover: https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg
---

## API

> 在 vite 项目中使用需要安装[`vite-plugin-monaco-editor`](https://github.com/vdesjs/vite-plugin-monaco-editor), 并在 vite.config.ts 中配置

### MonacoEditor

| 参数           | 说明                                                      | 类型   | 默认值 | 版本 |
| -------------- | --------------------------------------------------------- | ------ | ------ | ---- |
| value(v-model) | 编辑器内容                                                | string |        |      |
| theme          | 主题色: vs(默认高亮), vs-dark(黑色), hc-black(高亮黑色)   | string |        |      |
| language       | 编辑器支持的语言: json, css, html, typescript, javascript | string |        |      |
