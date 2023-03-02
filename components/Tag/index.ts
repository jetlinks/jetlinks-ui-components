import { withInstall } from '../util/type';
import Tag from 'ant-design-vue/lib/tag/index';
import CheckableTag from 'ant-design-vue/lib/tag/CheckableTag';

export type { TagProps } from 'ant-design-vue/lib/tag/index';

export const JTag = withInstall(Tag, 'JTag');
export const JCheckableTag = withInstall(CheckableTag, 'JCheckableTag');

export default JTag;
