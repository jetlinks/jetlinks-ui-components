import type { App } from 'vue';
import Tabs from './tabs.vue';
import { TabPane } from 'ant-design-vue/lib/tabs';
export type { TabsProps, TabPaneProps } from 'ant-design-vue/lib/tabs';

Tabs.TabPane = TabPane;

Tabs.install = function (app: App) {
    app.component('JTabs', Tabs);
    app.component('JTabPane', TabPane);
    return app;
};

export default Tabs;
