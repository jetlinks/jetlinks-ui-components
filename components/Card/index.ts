import { withInstall } from '../util/type';
import Card, { CardGrid, CardMeta } from 'ant-design-vue/lib/card/index';

export type { CardProps } from 'ant-design-vue/lib/card/index';

export const JCard = withInstall(Card, 'JCard');
export const JCardGrid = withInstall(CardGrid, 'JCardGrid');
export const JCardMeta = withInstall(CardMeta, 'JCardMeta');

export default JCard;
