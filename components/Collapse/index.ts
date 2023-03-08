import Collapse, { CollapsePanel } from 'ant-design-vue/lib/collapse/index';
import type { App } from 'vue';

export type {
    CollapseProps,
    CollapsePanelProps,
} from 'ant-design-vue/lib/collapse/index';

Collapse.name = 'JCollapse';
CollapsePanel.name = 'JCollapse';

Collapse.install = function (app: App) {
    app.component('JCollapse', Collapse);
    app.component('JCollapsePanel', CollapsePanel);
    return app;
};

export { CollapsePanel };
export default Collapse;
