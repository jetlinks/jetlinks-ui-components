import type { App } from 'vue';
import Badge from 'ant-design-vue/lib/badge/Badge';
import BadgeRibbon from 'ant-design-vue/lib/badge/Ribbon';

export type { BadgeProps } from 'ant-design-vue/lib/badge/index';

Badge.name = 'JBadge';
BadgeRibbon.name = 'JBadgeRibbon';

Badge.install = function (app: App) {
    app.component(Badge.name, Badge);
    app.component(BadgeRibbon.name, BadgeRibbon);
    return app;
};
export default Badge;

export { BadgeRibbon };
