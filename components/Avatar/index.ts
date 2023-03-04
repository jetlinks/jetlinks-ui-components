import type { App } from 'vue';
import Avatar from 'ant-design-vue/lib/avatar/Avatar';
import AvatarGroup from 'ant-design-vue/lib/avatar/Group';

export type { AvatarProps } from 'ant-design-vue/lib/avatar/index';

Avatar.name = 'JAvatar';
AvatarGroup.name = 'JAvatarGroup';

Avatar.install = function (app: App) {
    app.component(Avatar.name, Avatar);
    app.component(AvatarGroup.name, AvatarGroup);
    return app;
};

export default Avatar;

export { AvatarGroup };
