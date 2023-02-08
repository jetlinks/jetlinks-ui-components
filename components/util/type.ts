import type { App, Plugin } from 'vue';

export const withInstall = <T>(comp: T) => {
    const c = comp as any;
    c.install = function (app: App) {
        // @ts-ignore
        app.component(comp.name, comp);
    };

    return comp as T & Plugin;
};