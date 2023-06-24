import type { App } from 'vue';
import DataTable from './dataTable.vue';
import DataTable2 from './DataTable2.vue';
import {
    DataTableArray,
    DataTableString,
    DataTableInteger,
    DataTableDouble,
    DataTableBoolean,
    DataTableEnum,
    DataTableFile,
    DataTableDate,
    DataTableTypeSelect,
    DataTableObject,
} from './components';

export * from './components';

DataTable.install = function (app: App) {
    app.component('JDataTable', DataTable);
    app.component('JDataTables', DataTable2);
    app.component('JDataTableArray', DataTableArray);
    app.component('JDataTableString', DataTableString);
    app.component('JDataTableBoolean', DataTableBoolean);
    app.component('JDataTableInteger', DataTableInteger);
    app.component('JDataTableDouble', DataTableDouble);
    app.component('JDataTableEnum', DataTableEnum);
    app.component('JDataTableFile', DataTableFile);
    app.component('JDataTableDate', DataTableDate);
    app.component('JDataTableType', DataTableTypeSelect);
    app.component('JDataTableObject', DataTableObject);
};

export default DataTable;
