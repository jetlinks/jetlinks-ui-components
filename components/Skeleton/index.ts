import { withInstall } from '../util/type';
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

export const JSkeleton = withInstall(Skeleton, 'JSkeleton');
export const JSkeletonButton = withInstall(SkeletonButton, 'JSkeletonButton');
export const JSkeletonAvatar = withInstall(SkeletonAvatar, 'JSkeletonAvatar');
export const JSkeletonInput = withInstall(SkeletonInput, 'JSkeletonInput');
export const JSkeletonImage = withInstall(SkeletonImage, 'JSkeletonImage');
export const JSkeletonTitle = withInstall(SkeletonTitle, 'JSkeletonTitle');

export default JSkeleton;
