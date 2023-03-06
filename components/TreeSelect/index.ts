import type { App } from 'vue';
import TreeSelect, {
    TreeSelectNode,
} from 'ant-design-vue/lib/tree-select/index';

export type { TreeSelectProps } from 'ant-design-vue/lib/tree-select/index';

TreeSelect.name = 'JTreeSelect';

TreeSelect.install = function (app: App) {
    app.component(TreeSelect.name, TreeSelect);
    app.component('JTreeSelectNode', TreeSelectNode);
    return app;
};

export default TreeSelect;

export { TreeSelectNode };
