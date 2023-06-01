---
category: Components
subtitle: 搜索
cols: 1
type: 高阶组件
title: Search
cover:
---

## API

```html
<j-search></j-search>
```

可结合 ProTable 使用

| Property | Description         | Type      | Default Value |
| -------- | ------------------- | --------- | ------------- |
| columns  | 同`Table` `columns` | Columns[] | []            |
| labelWidth | label最小宽度 | Number | 40 |

### Columns

| Property  | Description                          | Type     | Default Value |
| --------- | ------------------------------------ | -------- | ------------- |
| dataIndex | 同`Table` `columns`中的 dataIndex    |          |
| title     | 同`Table` `columns`中的 title        |          |
| search    | 查询属性, 不传则不会出现在查询组件中 | Search[] |

### Search

| Property        | Description                                  | Type                                         | Default Value         |
| --------------- | -------------------------------------------- | -------------------------------------------- | --------------------- |
| first           | 是否提升为第一个查询字段                     | Boolean                                      | ''                    |
| rename          | 重命名查询字段，可以覆盖 Terms.column 中的值 |                                              |
| type            | 组件类型                                     | `select` `number` `treeSelect` `date` `time` | `string`              |
| componentProps  | 组件的 props                                 | `{}`                                         | {}                    |
| format          | `date` `time` 时生效                         | String                                       | `YYYY-MM-DD HH:mm:ss` |
| options         | `treeSelect` `select` 时生效                 | `Option[]` `Promise`                         | []                    |
| defaultTermType | 修改 Terms.termType 的默认值                 | String                                       | 'eq'                  |
| handleValue     | 处理 Terms.value                             | Function                                     | Function(item)        |

### 事件

| Property | Description | 回调参数                                                                                      |
| -------- | ----------- | --------------------------------------------------------------------------------------------- |
| search   | 搜索事件    | `AdvancedSearch`组件 Function({ terms: [{ terms: Terms[]] })； `Search`组件 Function(Terms[]) |

### Terms

| Property | Description      | Type                       |
| -------- | ---------------- | -------------------------- |
| column   | 查询字段         | string                     |
| type     | 两组查询间的关系 | `and` `or`                 |
| termType | 查询条件         | `eq` `like` `btw` 等       |
| value    | 查询值           | `string` `number` `Object` |
