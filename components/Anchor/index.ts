import type { App } from 'vue';
import Anchor from 'ant-design-vue/lib/anchor/Anchor';
import AnchorLink from 'ant-design-vue/lib/anchor/AnchorLink';

export type {
    AnchorProps,
    AnchorLinkProps,
} from 'ant-design-vue/lib/anchor/index';

Anchor.name = 'JAnchor';
AnchorLink.name = 'JAnchorLink';

Anchor.install = function (app: App) {
    app.component(Anchor.name, Anchor);
    app.component(AnchorLink.name, AnchorLink);
    return app;
};

export default Anchor;

export { AnchorLink };
