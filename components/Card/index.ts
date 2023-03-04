import type { App } from 'vue';
import Card, {
    CardGrid as JCardGrid,
    CardMeta as JCardMeta,
} from 'ant-design-vue/lib/card/index';

export type { CardProps } from 'ant-design-vue/lib/card/index';

Card.name = 'JCard';
JCardGrid.name = 'JCardGrid';
JCardMeta.name = 'JCardMeta';

Card.install = function (app: App) {
    app.component('JCard', Card);
    app.component('JCardGrid', JCardGrid);
    app.component('JCardMeta', JCardMeta);
    return app;
};

export default Card;

export { JCardGrid, JCardMeta };
