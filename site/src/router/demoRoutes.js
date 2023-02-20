
export default [
  
  {
    path: 'AIcon',
    meta: {"category":"Components","subtitle":"图标","cols":1,"type":"通用","title":"Icon","cover":"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg"},
    component: () => import('../../../components/AIcon/demo/index.vue'),
  },
  {
    path: 'AutoComplete',
    meta: {"category":"Components","subtitle":"自动完成","type":"数据录入","cols":2,"title":"AutoComplete","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../../../components/AutoComplete/demo/index.vue'),
  },
  {
    path: 'Button',
    meta: {"category":"Components","type":"通用","title":"Button","subtitle":"按钮","cover":"https://gw.alipayobjects.com/zos/alicdn/fNUKzY1sk/Button.svg"},
    component: () => import('../../../components/Button/demo/index.vue'),
  },
  {
    path: 'CardSelect',
    meta: {"category":"Components","title":"Card","subtitle":"卡片选择框","cols":2,"type":"数据录入","order":2},
    component: () => import('../../../components/CardSelect/demo/index.vue'),
  },
  {
    path: 'ColorPicker',
    meta: {"category":"Components","type":"数据录入","title":"ColorPicker","subtitle":"颜色选择器","cols":1,"cover":"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"},
    component: () => import('../../../components/ColorPicker/demo/index.vue'),
  },
  {
    path: 'Descriptions',
    meta: {"category":"Components","type":"数据展示","title":"Descriptions","subtitle":"描述列表","cover":"https://gw.alipayobjects.com/zos/alicdn/MjtG9_FOI/Descriptions.svg","cols":2,"order":3},
    component: () => import('../../../components/Descriptions/demo/index.vue'),
  },
  {
    path: 'Divider',
    meta: {"category":"Components","title":"Divider","subtitle":"分割线","cover":"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*7sMiTbzvaDoAAAAAAAAAAAAADrJ8AQ/original","cols":2,"type":"布局","order":2},
    component: () => import('../../../components/Divider/demo/index.vue'),
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
    path: 'Modal',
    meta: {"category":"Components","type":"反馈","title":"Modal","subtitle":"对话框","cover":"https://gw.alipayobjects.com/zos/alicdn/3StSdUlSH/Modal.svg"},
    component: () => import('../../../components/Modal/demo/index.vue'),
  },
  {
    path: 'MonacoEditor',
    meta: {"category":"Components","type":"数据录入","title":"MonacoEditor","subtitle":"代码编辑器","cols":1,"cover":"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"},
    component: () => import('../../../components/MonacoEditor/demo/index.vue'),
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  },
  {
    path: 'Tree',
    meta: {"category":"Components","type":"数据展示","title":"Tree","subtitle":"树形控件","cover":"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg"},
    component: () => import('../../../components/Tree/demo/index.vue'),
  },
  {
    path: 'AutoComplete',
    meta: {"category":"Components","subtitle":"自动完成","type":"数据录入","cols":2,"title":"AutoComplete","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../../../components/AutoComplete/demo/index.vue'),
  },
  {
    path: 'ProLayout',
    meta: {"category":"Components","subtitle":"布局","cols":1,"type":"高阶组件","iframeName":"ProLayout","title":"ProLayout","cover":null},
    component: () => import('../../../components/ProLayout/demo/index.vue'),
  },
  {
    path: 'ProTable',
    meta: {"category":"Components","subtitle":"表格","cols":1,"type":"高阶组件","title":"ProTable","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/ProTable/demo/index.vue'),
  },
  {
    path: 'Result',
    meta: {"category":"Components","type":"反馈","title":"Result","subtitle":"结果","cover":"https://gw.alipayobjects.com/zos/alicdn/9nepwjaLa/Result.svg"},
    component: () => import('../../../components/Result/demo/index.vue'),
  },
  {
    path: 'Scrollbar',
    meta: {"category":"Components","subtitle":"滚动条","cols":1,"type":"导航","title":"Scrollbar","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Scrollbar.svg"},
    component: () => import('../../../components/Scrollbar/demo/index.vue'),
  },
  {
    path: 'Search',
    meta: {"category":"Components","subtitle":"搜索","cols":1,"type":"高阶组件","title":"Search","cover":null},
    component: () => import('../../../components/Search/demo/index.vue'),
  },
  {
    path: 'Select',
    meta: {"category":"Components","subtitle":"选择器","type":"数据录入","title":"Select","cover":"https://gw.alipayobjects.com/zos/alicdn/_0XzgOis7/Select.svg"},
    component: () => import('../../../components/Select/demo/index.vue'),
  },
  {
    path: 'TableCard',
    meta: {"category":"Components","subtitle":"表格卡片","cols":1,"type":"数据展示","title":"TableCard","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
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
    path: 'Upload',
    meta: {"category":"Components","subtitle":"上传","cols":1,"type":"导航","title":"Upload","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Upload.svg"},
    component: () => import('../../../components/Upload/demo/index.vue'),
  }
];