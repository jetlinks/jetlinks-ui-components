import { withInstall } from "../util/type";
import Image from 'ant-design-vue/lib/image/index'
import ImagePreviewGroup from 'ant-design-vue/lib/image/PreviewGroup'

export type { ImageProps } from 'ant-design-vue/lib/image/index'
export const JImage = withInstall(Image, 'JImage');
export const JImagePreviewGroup = withInstall(ImagePreviewGroup, 'JImagePreviewGroup');

export default JImage