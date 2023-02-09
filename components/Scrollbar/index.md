---
category: Components
subtitle: 滚动条
cols: 1
type: 导航
title: Scrollbar
cover: https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Scrollbar.svg
---

## API

```html
<j-scrollbar></j-scrollbar>
```

### 属性

| 属性名       | 说明                                                                                                                     | 类型                                                                | 默认值 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height     |  滚动条高度                                                                                                                       | string / number                                              | —       |
| max-height |  滚动条最大高度                                                                                                                    | string / number                                              | —       |
| native     |  是否使用原生滚动条样式                                                                                                             | boolean                                                      | false   |
| wrap-style |  包裹容器的自定义样式                                                                                                               | string / object                                              | —       |
| wrap-class |  包裹容器的自定义类名                                                                                                               | string                                                       | —       |
| view-style |  视图的自定义样式                                                                                                                  | string / object                                              | —       |
| view-class |  视图的自定义类名                                                                                                                  | string                                                       | —       |
| noresize   |  不响应容器尺寸变化，如果容器尺寸不会发生变化，最好设置它可以优化性能                                                                       | boolean                                                      | false   |
| tag        |  视图的元素标签                                                                                                                    | string                                                       | div     |
| always     |  滚动条总是显示                                                                                                                     | boolean                                                     | false   |
| min-size   |  滚动条最小尺寸                                                                                                                     | number                                                      | 20      |
