
export default [
  
  {
    path: 'AIcon',
    meta: {"category":"Components","subtitle":"图标","cols":1,"type":"通用","title":"Icon","cover":"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg"},
    component: () => import('../../../components/AIcon/demo/index.vue'),
  },
  {
    path: 'Empty',
    meta: {"category":"Components","type":"数据展示","title":"Empty","subtitle":"空状态","cover":"https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg"},
    component: () => import('../../../components/Empty/demo/index.vue'),
    path: 'AutoComplete',
    meta: {"category":"Components","subtitle":"自动完成","type":"数据录入","cols":2,"title":"AutoComplete","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../../../components/AutoComplete/demo/index.vue'),
  },
  {
    path: 'Ellipsis',
    meta: {"category":"Components","title":"Ellipsis","subtitle":"文本省略","cover":"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original","cols":2,"type":"布局","order":3},
    component: () => import('../../../components/Ellipsis/demo/index.vue'),
  },
  {
    path: 'Empty',
    meta: {"category":"Components","type":"数据展示","title":"Empty","subtitle":"空状态","cover":"https://gw.alipayobjects.com/zos/alicdn/MNbKfLBVb/Empty.svg"},
    component: () => import('../../../components/Empty/demo/index.vue'),
  },
  {
    path: 'Input',
    meta: {"category":"Components","type":"数据录入","title":"Input","subtitle":"输入框","cols":1,"cover":"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"},
    component: () => import('../../../components/Input/demo/index.vue'),
  },
  {
    path: 'Message',
    meta: {"category":"Components","subtitle":"全局提示","cols":1,"type":"反馈","title":"Message","cover":"https://gw.alipayobjects.com/zos/alicdn/hAkKTIW0K/Message.svg"},
    component: () => import('../../../components/Message/demo/index.vue'),
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  },
  {
    path: 'MonacoEditor',
    meta: {"category":"Components","type":"数据录入","title":"MonacoEditor","subtitle":"代码编辑器","cols":1,"cover":"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"},
    component: () => import('../../../components/MonacoEditor/demo/index.vue'),
  },
  {
    path: 'TableCard',
    meta: {"category":"Components","subtitle":"表格卡片","cols":2,"type":"导航","title":"TableCard","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/TableCard/demo/index.vue'),
  },
  {
    path: 'Tabs',
    meta: {"category":"Components","subtitle":"标签页","type":"数据展示","title":"Tabs","cover":"https://gw.alipayobjects.com/zos/antfincdn/lkI2hNEDr2V/Tabs.svg"},
    component: () => import('../../../components/Tabs/demo/index.vue'),
  },
  {
    path: 'Tree',
    meta: {"category":"Components","type":"数据展示","title":"Tree","subtitle":"树形控件","cover":"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg"},
    component: () => import('../../../components/Tree/demo/index.vue'),
  },
  {
    path: 'Popconfirm',
    meta: {"category":"Components","type":"反馈","title":"Popconfirm","subtitle":"气泡确认框","cover":"https://gw.alipayobjects.com/zos/alicdn/fjMCD9xRq/Popconfirm.svg","cols":1},
    component: () => import('../../../components/Popconfirm/demo/index.vue'),
  },
  {
    path: 'Scrollbar',
    meta: {"category":"Components","subtitle":"滚动条","cols":1,"type":"导航","title":"Scrollbar","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Scrollbar.svg"},
    component: () => import('../../../components/Scrollbar/demo/index.vue'),
  },
  {
    path: 'TableCard',
    meta: {"category":"Components","subtitle":"表格卡片","cols":2,"type":"导航","title":"TableCard","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/TableCard/demo/index.vue'),
  },
];