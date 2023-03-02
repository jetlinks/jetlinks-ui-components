---
category: Components
subtitle: 表格
cols: 1
type: 高阶组件
title: ScrollTable
# cover: https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg
---

## API

```html
<j-scroll-table />
```

### ScrollTable

| 参数             | 说明                                                                                                                                        | 类型                        | 默认值 | 版本 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ------ | ---- |
| request          | 请求数据的                                                                                                                              | promise                     | -      |      |
| loading          | 控制loading api                                                                                                                              | boolean                     | undefined     |      |
| params           | 搜索参数                                                                                                                                    | object                      | {}     |      |
| dataSource       | 数据数组                                                                                                                                    | object\[]                   |        |      |
| defaultParams    | 默认参数                                                                                                                                    | object                      | {}     |      |
| bodyStyle        | 内容区域自定义样式                                                                                                                          | object                      | -      |      |
| windowHeight     | 可视范围的高度                                                                                                                              | number                      | 500    |      |
| card             | 卡片插槽                                                                                                                                    | slot                        | -      |      |
| pre              | 滑动表格的第一个卡片插槽                                                                                                                    | slot                        | -      |      |