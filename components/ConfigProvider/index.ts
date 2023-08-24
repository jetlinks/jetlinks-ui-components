import { App } from 'vue';
import ConfigProvider from './ConfigProvider';
import { defaultConfigProvider } from 'ant-design-vue/lib/config-provider';

ConfigProvider.name = 'JConfigProvider';

ConfigProvider.install = function (app: App) {
    app.component('JConfigProvider', ConfigProvider);
};

export { globalConfig, globalConfigForApi, defaultPrefixCls } from 'ant-design-vue/lib/config-provider';
export type { ConfigProviderProps, Theme, SizeType, Direction, CSPConfig } from 'ant-design-vue/lib/config-provider';

export { defaultConfigProvider };

export default ConfigProvider;
