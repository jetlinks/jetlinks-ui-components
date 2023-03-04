import type { App } from 'vue';
import Tag from 'ant-design-vue/lib/tag/index';
import CheckableTag from 'ant-design-vue/lib/tag/CheckableTag';

export type { TagProps } from 'ant-design-vue/lib/tag/index';

Tag.name = 'JTag';
CheckableTag.name = 'JCheckableTag';

Tag.install = function (app: App) {
    app.component(Tag.name, Tag);
    app.component(CheckableTag.name, CheckableTag);
    return app;
};

export default Tag;

export { CheckableTag };
