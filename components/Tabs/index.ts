import { withInstall } from '../util/type';
import type { App, Plugin } from 'vue';
import Tabs from './tabs.vue';
import { TabPane } from 'ant-design-vue';

export const JLTabs = withInstall(Tabs, 'JTabs');
export const JTabPane = withInstall(TabPane, 'JTabPane');

export default JLTabs;