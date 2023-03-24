import type { App, Plugin } from 'vue';

export const withInstall = <T>(comp: T, name: string) => {
    const c = comp as any;
    c.install = function (app: App) {
        // @ts-ignore
        app.component(name, comp);
        return app;
    };

    return comp as T & Plugin;
};
