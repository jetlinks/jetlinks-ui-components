
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
  },
  {
    path: 'Pagination',
    meta: {"category":"Components","subtitle":"分页","cols":1,"type":"导航","title":"Pagination","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Pagination.svg"},
    component: () => import('../../../components/Pagination/demo/index.vue'),
  }
];