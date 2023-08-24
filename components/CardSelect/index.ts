import CardSelect from './CardSelect.vue';
import CardSelectOption from './Option.vue';
import type { App } from 'vue';

CardSelect.name = 'JCardSelect';
CardSelect.Option = CardSelectOption;

CardSelect.install = function (app: App) {
    app.component('JCardSelect', CardSelect);
    app.component('JCardSelectOption', CardSelectOption);
    return app;
};

export { CardSelectOption };
export default CardSelect;
