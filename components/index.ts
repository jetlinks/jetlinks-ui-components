import type { App } from 'vue';
/*eslint import/namespace: ['error', { allowComputed: true }]*/
import * as components from './components';

export * from './components';

export const install = function (app: App) {
    Object.keys(components).forEach((key) => {
        const component = components[key];
        if (component.install) {
            app.use(component);
        }
    });

    return app;
};

export default { install };
