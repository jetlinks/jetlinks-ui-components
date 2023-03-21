import { App } from 'vue'
import ConfigProvider, { defaultConfigProvider } from 'ant-design-vue/lib/config-provider'

ConfigProvider.name= 'JConfigProvider'

ConfigProvider.install = function (app: App) {
    app.component('JConfigProvider', ConfigProvider);
};

export {
    defaultConfigProvider
}

export default ConfigProvider