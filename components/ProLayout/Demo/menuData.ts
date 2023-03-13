import WelCome from './Welcome.vue';

export default [
    {
        path: '/welcome',
        component: WelCome,
        meta: {
            title: '欢迎',
            icon: 'SmileFilled',
        },
    },
    {
        path: '/admin',
        meta: {
            title: '管理页',
            icon: 'CrownFilled',
        },
        component: WelCome,
        children: [
            {
                path: '/admin/sub-page1',
                meta: {
                    title: '一级页面',
                    icon: 'CrownFilled',
                },
                component: WelCome,
            },
            {
                path: '/admin/sub-page2',
                meta: {
                    title: '二级页面',
                    icon: 'CrownFilled',
                },
                component: WelCome,
            },
            {
                path: '/admin/sub-page3',
                meta: {
                    title: '三级页面',
                    icon: 'CrownFilled',
                },
                component: WelCome,
            },
        ],
    },
    {
        path: '/list',
        meta: {
            title: '列表页',
            icon: 'TabletFilled',
            hideInMenu: true,
        },
        component: WelCome,
        children: [
            {
                path: '/list/sub-page',
                meta: {
                    title: '列表页面',
                    icon: 'CrownFilled',
                },
                children: [
                    {
                        path: 'sub-sub-page1',
                        meta: {
                            title: '一一级列表页面',
                            icon: 'CrownFilled',
                        },
                        component: WelCome,
                    },
                    {
                        path: 'sub-sub-page2',
                        meta: {
                            title: '一二级列表页面',
                            icon: 'CrownFilled',
                        },
                        component: WelCome,
                    },
                    {
                        path: 'sub-sub-page3',
                        meta: {
                            title: '一三级列表页面',
                            icon: 'CrownFilled',
                        },
                        component: WelCome,
                    },
                ],
            },
            {
                path: '/list/sub-page2',
                meta: {
                    title: '二级列表页面',
                    icon: 'CrownFilled',
                },
                component: WelCome,
            },
            {
                path: '/list/sub-page3',
                meta: {
                    title: '三级列表页面',
                    icon: 'CrownFilled',
                },
                component: WelCome,
            },
        ],
    },
];
