import { withInstall } from '../util/type';
import Badge from 'ant-design-vue/lib/badge/Badge';
import BadgeRibbon from 'ant-design-vue/lib/badge/Ribbon';

export type { BadgeProps } from 'ant-design-vue/lib/badge/index';

export const JBadge = withInstall(Badge, 'JBadge');
export const JBadgeRibbon = withInstall(BadgeRibbon, 'JBadgeRibbon');

export default JBadge;
