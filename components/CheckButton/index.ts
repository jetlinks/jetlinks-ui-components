import type { App } from 'vue';
import CheckButton from './checkButton.vue';

CheckButton.install = function (app: App) {
    app.component('JCheckButton', CheckButton);
    return app;
};
export default CheckButton;

export { CheckButton };
