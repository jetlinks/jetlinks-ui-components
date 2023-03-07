import type { App } from 'vue';
import Descriptions, {
    DescriptionsItem,
} from 'ant-design-vue/lib/descriptions';

Descriptions.name = 'JDescriptions';
DescriptionsItem.name = 'JDescriptionsItem';

Descriptions.install = function (app: App) {
    app.component('JDescriptions', Descriptions);
    app.component('JDescriptionsItem', DescriptionsItem);
    return app;
};

export default Descriptions;

export { DescriptionsItem };
