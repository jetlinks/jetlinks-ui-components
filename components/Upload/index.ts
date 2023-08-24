import type { App } from 'vue';
import JUploadImage from './upload.vue';
import Upload from 'ant-design-vue/lib/upload';
import Dragger from 'ant-design-vue/lib/dropdown';

Upload.name = 'JUpload';
Dragger.name = 'JUploadDragger';

Upload.install = function (app: App) {
    app.component('JUpload', Upload);
    app.component('JUploadImage', JUploadImage);
    app.component(Dragger.name, Dragger);
    return app;
};

export default Upload;

export { JUploadImage };
