
export default [
  
  {
    path: 'Input',
    meta: {"category":"Components","type":"导航","title":"Input","subtitle":"输入框","cols":1,"cover":"https://gw.alipayobjects.com/zos/alicdn/xS9YEJhfe/Input.svg"},
    component: () => import('../../../components/Input/demo/index.vue'),
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  }
];