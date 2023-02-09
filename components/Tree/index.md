---
category: Components
type: 数据展示
title: Tree
subtitle: 树形控件
cover: https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg
---

多层次的结构列表。

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用`树控件`可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## API

### Tree props

| 参数 | 说明 | 类型 | 默认值 | 版本 |  |
| --- | --- | --- | --- | --- | --- |
| autoExpandParent | 是否自动展开父节点 | boolean | false |  |  |
| blockNode | 是否节点占据一行 | boolean | false |  |  |
| checkable | 节点前添加 Checkbox 复选框 | boolean | false |  |  |
| checkedKeys(v-model) | （受控）选中复选框的树节点（注意：父子节点有关联，如果传入父节点 key，则子节点自动选中；相应当子节点 key 都传入，父节点也自动选中。当设置`checkable`和`checkStrictly`，它是一个有`checked`和`halfChecked`属性的对象，并且父子节点的选中与否不再关联 | string\[] \| number\[] \| {checked: string\[] \| number\[], halfChecked: string\[] \| number\[]} | \[] |  |  |
| checkStrictly | checkable 状态下节点选择完全受控（父子节点选中状态不再关联） | boolean | false |  |  |
| defaultExpandAll | 默认展开所有树节点, 如果是异步数据，需要在数据返回后再实例化，建议用 v-if="data.length"；当有 expandedKeys 时，defaultExpandAll 将失效 | boolean | false |  |  |
| disabled | 将树禁用 | bool | false |  |  |
| draggable | 设置节点可拖拽 | boolean | false |  |  |
| expandedKeys(v-model) | （受控）展开指定的树节点 | string\[] \| number\[] | \[] |  |  |
| fieldNames | 替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段 | object | {children:'children', title:'title', key:'key' } | 3.0.0 |  |
| filterTreeNode | 按需筛选树节点（高亮），返回 true | function(node) | - |  |  |
| loadData | 异步加载数据 | function(node) | - |  |  |
| loadedKeys | （受控）已经加载的节点，需要配合 `loadData` 使用 | string\[] \| number\[] | \[] |  |  |
| multiple | 支持点选多个节点（节点本身） | boolean | false |  |  |
| selectable | 是否可选中 | boolean | true |  |  |
| selectedKeys(v-model) | （受控）设置选中的树节点 | string\[] \| number\[] | - |  |  |
| showIcon | 是否展示 TreeNode title 前的图标，没有默认样式，如设置为 true，需要自行定义图标相关样式 | boolean | false |  |  |
| showLine | 是否展示连接线 | boolean \| {showLeafIcon: boolean}(3.0+) | false |  |  |
| switcherIcon | 自定义树节点的展开/折叠图标 | v-slot:switcherIcon="{active, checked, expanded, loading, selected, halfChecked, title, key, children, dataRef, data, defaultIcon, switcherCls}" | - |  |  |
| title | 自定义标题 | slot |  | 2.0.0 |  |
| treeData | treeNodes 数据，如果设置则不需要手动构造 TreeNode 节点（key 在整个树范围内唯一） | [TreeNode\[\]](#TreeNode) | -- |  |  |
| virtual | 设置 false 时关闭虚拟滚动 | boolean | true | 3.0 |  |
