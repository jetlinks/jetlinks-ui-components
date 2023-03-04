import type { App } from 'vue';
import Skeleton from 'ant-design-vue/lib/skeleton/Skeleton';
import SkeletonButton from 'ant-design-vue/lib/skeleton/Button';
import SkeletonAvatar from 'ant-design-vue/lib/skeleton/Avatar';
import SkeletonInput from 'ant-design-vue/lib/skeleton/Input';
import SkeletonImage from 'ant-design-vue/lib/skeleton/Image';
import SkeletonTitle from 'ant-design-vue/lib/skeleton/Title';

export type {
    SkeletonProps,
    SkeletonButtonProps,
    SkeletonInputProps,
    SkeletonImageProps,
    SkeletonAvatarProps,
    SkeletonTitleProps,
} from 'ant-design-vue/lib/skeleton/index';

Skeleton.name = 'JSkeleton';
SkeletonButton.name = 'JSkeletonButton';
SkeletonAvatar.name = 'JSkeletonAvatar';
SkeletonInput.name = 'JSkeletonInput';
SkeletonImage.name = 'JSkeletonImage';
SkeletonTitle.name = 'JSkeletonTitle';

Skeleton.install = function (app: App) {
    app.component(Skeleton.name, Skeleton);
    app.component(SkeletonButton.name, SkeletonButton);
    app.component(SkeletonAvatar.name, SkeletonAvatar);
    app.component(SkeletonInput.name, SkeletonInput);
    app.component(SkeletonImage.name, SkeletonImage);
    app.component(SkeletonTitle.name, SkeletonTitle);
    return app;
};

export default Skeleton;

export {
    SkeletonButton,
    SkeletonAvatar,
    SkeletonInput,
    SkeletonImage,
    SkeletonTitle,
};
