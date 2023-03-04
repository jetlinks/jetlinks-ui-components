import type { App } from 'vue';
import Mentions, { MentionsOption } from 'ant-design-vue/lib/mentions/index';

export type { MentionsProps } from 'ant-design-vue/lib/mentions/index';

Mentions.name = 'JMentions';
MentionsOption.name = 'JMentionsOption';
Mentions.install = function (app: App) {
    app.component(Mentions.name, Mentions);
    app.component(MentionsOption.MentionsOption, MentionsOption);
    return app;
};

export default Mentions;

export { MentionsOption };
