import type { App } from 'vue';
import Image from 'ant-design-vue/lib/image/index';
import ImagePreviewGroup from 'ant-design-vue/lib/image/PreviewGroup';

export type { ImageProps } from 'ant-design-vue/lib/image/index';
export {  imageProps } from 'ant-design-vue/lib/image/index';

Image.name = 'JImage';
ImagePreviewGroup.name = 'JImageRibbon';

Image.install = function (app: App) {
    app.component(Image.name, Image);
    app.component(ImagePreviewGroup.name, ImagePreviewGroup);
    return app;
};

export default Image;

export { ImagePreviewGroup };
