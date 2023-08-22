import type { App } from 'vue';
import TreeSelect, {
    TreeSelectNode,
} from 'ant-design-vue/lib/tree-select/index';

export type {
    TreeSelectProps,
    LabeledValue,
    SelectValue,
    RefTreeSelectProps
} from 'ant-design-vue/lib/tree-select/index';

export { treeSelectProps } from 'ant-design-vue/lib/tree-select/index';

TreeSelect.name = 'JTreeSelect';

TreeSelect.install = function (app: App) {
    app.component(TreeSelect.name, TreeSelect);
    app.component('JTreeSelectNode', TreeSelectNode);
    return app;
};

export default TreeSelect;

export { TreeSelectNode };
