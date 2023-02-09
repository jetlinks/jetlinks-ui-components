
export default [
  
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  },
  {
    path: 'TableCard',
    meta: {"category":"Components","subtitle":"表格卡片","cols":1,"type":"导航","title":"TableCard","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/TableCard/demo/index.vue'),
  }
];