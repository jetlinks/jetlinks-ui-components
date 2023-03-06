import type { App } from 'vue';
import JUpload from './Upload.vue';
import Upload from 'ant-design-vue/lib/upload';

Upload.name = 'JUpload';

Upload.install = function (app: App) {
    app.component('JUpload', Upload);
    app.component('JUploadImage', JUpload);
    return app;
};

export default Upload;
