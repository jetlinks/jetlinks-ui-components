
export default [
  
  {
    path: 'AIcon',
    meta: {"category":"Components","subtitle":"图标","cols":1,"type":"导航","title":"Icon"},
    component: () => import('../../../components/AIcon/demo/index.vue'),
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  },
  {
    path: 'AutoComplete',
    meta: {"category":"Components","subtitle":"自动完成","type":"数据录入","cols":2,"title":"AutoComplete","cover":"https://gw.alipayobjects.com/zos/alicdn/qtJm4yt45/AutoComplete.svg"},
    component: () => import('../../../components/AutoComplete/demo/index.vue'),
  },
];