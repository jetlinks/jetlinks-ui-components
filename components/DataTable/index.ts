import type { App } from 'vue';
import DataTable from './dataTable.vue';
import DataTable2 from './DataTable2.vue';
import {
    Array,
    String,
    Integer,
    Double,
    Boolean,
    Enum,
    File,
    Date,
    TypeSelect,
    Object,
} from './components';

DataTable.install = function (app: App) {
    app.component('JDataTable', DataTable);
    app.component('JDataTables', DataTable2);
    app.component('JDataTableArray', Array);
    app.component('JDataTableString', String);
    app.component('JDataTableBoolean', Boolean);
    app.component('JDataTableInteger', Integer);
    app.component('JDataTableDouble', Double);
    app.component('JDataTableEnum', Enum);
    app.component('JDataTableFile', File);
    app.component('JDataTableDate', Date);
    app.component('JDataTableType', TypeSelect);
    app.component('JDataTableObject', Object);
};

export default DataTable;
