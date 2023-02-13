---
category: Components
subtitle: 表格
cols: 1
type: 高阶组件
title: ProTable
cover: https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg
---

## API

```html
<j-pro-table type="" />
```
### Table

该属性参考ant-design-vue的 [Table](https://www.antdv.com/components/table-cn#Table)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| request | 请求数据的api | promise | - |  |
| columns | 表格列的配置描述 | array | - |  |
| params | 搜索参数 | object | {} |  |
| type | 表格的类型 | `TREE`\| `PAGE` \| `SCROLL` | 'PAGE' |  |
| noPagination | 是否显示分页 | boolean | trues |  |
| rowSelection | 列表项是否可选择 | object | - |  |
| dataSource | 数据数组 | object\[] |  |  |
| gridColumns | 用于不同分辨率下展示的卡片数量的展示，gridColumns\[0] 1366 ~ 1440 分辨率，gridColumns\[1] 1440 ~  1600 分辨率, gridColumns\[2] > 1600 分辨率 | number[] | - |  |
| gridColumn | 每行展示的卡片数量 | number | - |  |
| alertRender | 是否展示上方选择提示框 | boolean | true |  |
| defaultParams | 默认参数 | object | {} |  |
| bodyStyle | 内容区域自定义样式  | object | - |  |
| cardHeight | 卡片高度| number | 100 |  |
| cardWidth | 卡片宽度 | number | 100 |  |
| windowHeight | 可视范围的高度 | number | 500 |  |
| columnSpan | 卡片上下间隔 | number | 20 |  |
| rowSpan | 卡片左右间隔 | number | 20 |  |
| card | 卡片插槽 | slot | - |  |
| pre | 滑动表格的第一个卡片插槽 | slot | - |  |
| headerTitle | type为`PAGE`和`TREE`时顶部左边插槽 | slot | - |  |
| rightExtraRender | type为`PAGE`和`TREE`时顶部右边插槽 | slot | - |  |
| paginationRender | 分页插槽 | slot | - |  |

### Column

该属性参考ant-design-vue的 [Column](https://www.antdv.com/components/table-cn#Column).

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| scopedSlots | 是否为插槽 | boolean | false |  |

### 事件

| 事件名称  | 说明           | 回调参数      | 版本 |     |
| --------- | -------------- | ------------- | ---- | --- |
| cancelSelect | 取消选择 | () => void | -    |     |