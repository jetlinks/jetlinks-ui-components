import { withInstall } from "../util/type";
import Steps from 'ant-design-vue/lib/steps/index';
import Avatar from 'ant-design-vue/lib/avatar/Avatar'
import AvatarGroup from 'ant-design-vue/lib/avatar/Group'

export type { AvatarProps } from 'ant-design-vue/lib/avatar/index'
export const JAvatar = withInstall(Avatar, 'JAvatar');
export const JAvatarGroup = withInstall(AvatarGroup, 'JAvatarGroup');

export default JAvatar