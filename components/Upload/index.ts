import type { App } from 'vue';
import JUploadImage from './upload.vue';
import Upload from 'ant-design-vue/lib/upload';

Upload.name = 'JUpload';

Upload.install = function (app: App) {
    app.component('JUpload', Upload);
    app.component('JUploadImage', JUploadImage);
    return app;
};

export default Upload;

export { JUploadImage };
