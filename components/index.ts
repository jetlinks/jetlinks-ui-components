export { default as Pagination} from './Pagination'

import type { App } from 'vue';

import * as components from './components';

export const install = function (app: App) {
    Object.keys(components).forEach(key => {
        const component = components[key];
    console.log(key, component)
        if (component.install) {
            app.use(component);
        }
    });

    return app;
};

export default { install };