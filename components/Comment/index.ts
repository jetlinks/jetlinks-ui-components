import { withInstall } from '../util/type';
import Comment, { commentProps } from 'ant-design-vue/lib/comment/index';

export { commentProps };

export type { CommentProps } from 'ant-design-vue/lib/comment/index';

export const JComment = withInstall(Comment, 'JComment');

export default JComment;
