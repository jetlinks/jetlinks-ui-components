import type { App } from 'vue';
import DataTable from './dataTable.vue';
import { String, Integer, Double, Boolean, Enum } from './components';

DataTable.install = function (app: App) {
    app.component(DataTable.name, DataTable);
    app.component('JDataTableString', String);
    app.component('JDataTableBoolean', Boolean);
    app.component('JDataTableInteger', Integer);
    app.component('JDataTableDouble', Double);
    app.component('JDataTableEnum', Enum);
};

export default DataTable;
