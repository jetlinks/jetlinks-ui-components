
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
    path: 'Tree',
    meta: {"category":"Components","type":"数据展示","title":"Tree","subtitle":"树形控件","cover":"https://gw.alipayobjects.com/zos/alicdn/Xh-oWqg9k/Tree.svg"},
    component: () => import('../../../components/Tree/demo/index.vue'),
  }
];