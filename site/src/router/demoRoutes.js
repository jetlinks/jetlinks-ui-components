
export default [
  
  {
    path: 'AIcon',
    meta: {"category":"Components","subtitle":"图标","cols":1,"type":"通用","title":"Icon","cover":"https://gw.alipayobjects.com/zos/alicdn/rrwbSt3FQ/Icon.svg"},
    component: () => import('../../../components/AIcon/demo/index.vue'),
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
    path: 'Scrollbar',
    meta: {"category":"Components","subtitle":"滚动条","cols":1,"type":"导航","title":"Scrollbar","cover":"https://gw.alipayobjects.com/zos/alicdn/1vqv2bj68/Scrollbar.svg"},
    component: () => import('../../../components/Scrollbar/demo/index.vue'),
  }
];