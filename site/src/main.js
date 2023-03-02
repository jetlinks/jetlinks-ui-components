/* eslint-disable no-console */
// import '../../components/style';
// import 'docsearch.js/dist/cdn/docsearch.css';
import './index.less';
import {
    createApp,
    Transition,
    TransitionGroup,
    version as vueVersion,
} from 'vue';
import router from './router';
import demoBox from './components/DemoBox.vue';
import demoContainer from './components/demoContainer.vue';
import demoSort from './components/demoSort.jsx';
import clipboard from './directives/clipboard';
import App from './App.vue';
import i18n from './i18n';
// import 'ant-design-vue/dist/antd.css';
import antd from 'ant-design-vue';
import JUI from '../../components/index';
import '../../components/style.ts';
const app = createApp(App);

app.use(antd);
app.use(JUI);
app.use(clipboard);
app.component('Transition', Transition);
app.component('TransitionGroup', TransitionGroup);
app.component('DemoBox', demoBox);
app.component('DemoContainer', demoContainer);
app.component('DemoSort', demoSort);
app.component('VNodes', function (_, { attrs: { value } }) {
    return value;
});

// app.component('tempVar', {
//   functional: true,
//   render: (h, ctx) => {
//     return ctx.scopedSlots && ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props);
//   },
// });

router.afterEach((to, from) => {
    if (to.path !== from.path) {
        document.documentElement.scrollTop = 0;
    }
});

app.use(router);
app.use(i18n);

app.config.globalProperties.$i18n = i18n;

app.mount('#app');
