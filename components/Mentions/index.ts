import { withInstall } from '../util/type';
import Mentions, { MentionsOption } from 'ant-design-vue/lib/mentions/index';

export type { MentionsProps } from 'ant-design-vue/lib/mentions/index';

export const JMentions = withInstall(Mentions, 'JMentions');
export const JMentionsOption = withInstall(MentionsOption, 'JMentionsOption');

export default JMentions;
