import type { App } from 'vue';
import DataTable from './dataTable.vue';
import {Array, String, Integer, Double, Boolean, Enum, File, Date, TypeSelect, Metrics } from './components';

DataTable.install = function (app: App) {
    app.component('JDataTable', DataTable);
    app.component('JDataTableArray', Array);
    app.component('JDataTableString', String);
    app.component('JDataTableBoolean', Boolean);
    app.component('JDataTableInteger', Integer);
    app.component('JDataTableDouble', Double);
    app.component('JDataTableEnum', Enum);
    app.component('JDataTableFile', File);
    app.component('JDataTableDate', Date);
    app.component('JDataTableType', TypeSelect);
    app.component('JDataTableMetrics', Metrics);
};

export default DataTable;
