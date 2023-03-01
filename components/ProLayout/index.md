---
category: Components
subtitle: 布局
type: 高阶组件
cols: 1
title: ProLayout
cover:
---

## API

```html
<j-pro-layout></j-pro-layout>
```

### ProLayout

| Property                | Description                                                           | Type                                                                   | Default Value      |
| ----------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------------------ |
| title                   | layout in the upper left corner title                                 | VNode \| String                                                        | `'Ant Design Pro'` |
| logo                    | layout top left logo url                                              | VNode \| render                                                        | -                  |
| loading                 | layout loading status                                                 | boolean                                                                | -                  |
| layout                  | layout menu mode, sidemenu: right navigation, topmenu: top navigation | 'side' \| 'top' \| 'mix'                                               | `'side'`           |
| contentWidth            | content mode of layout, Fluid: adaptive, Fixed: fixed width 1200px    | 'Fixed' \| 'Fluid'                                                     | `Fluid`            |
| navTheme                | Navigation theme                                                      | 'light' \|'dark'                                                       | `'light'`          |
| headerTheme             | Header Bar theme                                                      | 'light' \|'dark'                                                       | `'light'`          |
| menuData                | Vue-router `routes` prop                                              | Object                                                                 | `[{}]`             |
| collapsed               | control menu's collapse and expansion                                 | boolean                                                                | true               |
| selectedKeys            | menu selected keys                                                    | string[]                                                               | `[]`               |
| openKeys                | menu openKeys                                                         | string[]                                                               | `[]`               |
| onCollapse \| @collapse | folding collapse event of menu                                        | (collapsed: boolean) => void                                           | -                  |
| menuHeaderRender        | render header logo and title                                          | v-slot \| VNode \| (logo,title)=>VNode \| false                        | -                  |
| menuExtraRender         | render extra menu item                                                | v-slot \| VNode \| (props)=>VNode \| false                             | -                  |
| menuFooterRender        | render footer menu item                                               | v-slot \| VNode \| (props)=>VNode \| false                             | -                  |
| headerContentRender     | custom header render method                                           | `slot` \| (props: BasicLayoutProps) => VNode                           | -                  |
| rightContentRender      | header right content render method                                    | `slot` \| (props: HeaderViewProps) => VNode                            | -                  |
| collapsedButtonRender   | custom collapsed button method                                        | `slot` \| (collapsed: boolean) => VNode                                | -                  |
| breadcrumbRender        | custom breadcrumb render method                                       | `slot` \| ({ route, params, routes, paths, h }) => VNode[]             | -                  |
| menuItemRender          | custom render Menu.Item                                               | v-slot#menuItemRender="{ item, icon }" \| ({ item, icon }) => VNode    | null               |
| subMenuItemRender       | custom render Menu.SubItem                                            | v-slot#subMenuItemRender="{ item, icon }" \| ({ item, icon }) => VNode | null               |
| locale                  | i18n                                                                  | Function (key: string) => string \| `false`                            | `false`            |

### PageContainer

| Property       | Description                                      | Type                               | Default Value |
| -------------- | ------------------------------------------------ | ---------------------------------- | ------------- |
| content        | Content area                                     | VNode \| v-slot                    | -             |
| extra          | Extra content area, on the right side of content | VNode \| v-slot                    | -             |
| extraContent   | Extra content area, on the right side of content | VNode \| v-slot                    | -             |
| tabList        | Tabs title list                                  | `Array<{key: string, tab: sting}>` | -             |
| tab-change     | Switch panel callback                            | (key) => void                      | -             |
| tab-active-key | The currently highlighted tab item               | string                             | -             |
