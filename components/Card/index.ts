import type { App } from 'vue';
import Card, { CardGrid, CardMeta } from 'ant-design-vue/lib/card/index';

export type { CardProps } from 'ant-design-vue/lib/card/index';

Card.name = 'JCard';
CardGrid.name = 'JCardGrid';
CardMeta.name = 'JCardMeta';

Card.install = function (app: App) {
    app.component('JCard', Card);
    app.component('JCardGrid', CardGrid);
    app.component('JCardMeta', CardMeta);
    return app;
};

export default Card;

export { CardGrid, CardMeta };
