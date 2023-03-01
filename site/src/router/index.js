/* eslint-disable import/no-unresolved */
import Layout from '../layouts/index.vue';
import Iframe from '../layouts/Iframe.vue';
// import Iframe from '../components/iframe.jsx';
import demoRoutes from './demoRoutes';
// import otherRoutes from './otherRoutes';
import { createRouter, createWebHistory } from 'vue-router';

console.log('demoRoutes', demoRoutes);
const routes = [
    // ...otherRoutes,
    {
        path: '/components',
        component: Layout,
        children: [
            {
                path: 'overview',
                component: () => import('../views/ComponentOverview.vue'),
            },
            ...demoRoutes,
        ],
    },
    {
        path: '/iframe',
        component: Iframe,
        children: [
            {
                path: 'layout',
                meta: {
                    category: 'Components',
                    subtitle: '布局',
                    type: '布局',
                    cols: 1,
                    title: 'ProLayout',
                },
                props: (route) => {
                    const hash = route.hash.replace('#', '');
                    console.log('hash', hash);
                    return { iframeName: hash };
                },
                component: () =>
                    import('../../../components/ProLayout/demo/index.vue'),
            },
        ],
    },
    { path: '/', redirect: '/components/overview' },
];

export default createRouter({
    history: createWebHistory(),
    fallback: false,
    routes,
    scrollBehavior: (to) => {
        if (to.hash) {
            return { el: to.hash, top: 80, behavior: 'auto' };
        }
    },
});
