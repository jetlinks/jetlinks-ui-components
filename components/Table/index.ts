import type { App } from 'vue';
import Table from './table';
import TableColumn from 'ant-design-vue/lib/table/Column';
import TableColumnGroup from 'ant-design-vue/lib/table/ColumnGroup';
import {
    TableSummary,
    TableSummaryRow,
    TableSummaryCell,
} from 'ant-design-vue/lib/table/index';

export type {
    TableProps,
    TablePaginationConfig,
    ColumnGroupType,
    ColumnType,
    ColumnProps,
    ColumnsType,
} from 'ant-design-vue/lib/table/index';

Table.name = 'JTable';
TableColumn.name = 'JTableColumn';
TableColumnGroup.name = 'JTableColumnGroup';
TableSummary.name = 'JTableSummary';
TableSummaryRow.name = 'JTableSummaryRow';
TableSummaryCell.name = 'JTableSummaryCell';

Table.install = function (app: App) {
    app.component(Table.name, Table);
    app.component(TableColumn.name, TableColumn);
    app.component(TableColumnGroup.name, TableColumnGroup);
    app.component(TableSummary.name, TableSummary);
    app.component(TableSummaryRow.name, TableSummaryRow);
    app.component(TableSummaryCell.name, TableSummaryCell);
    return app;
};

export default Table;

export {
    TableColumn,
    TableColumnGroup,
    TableSummary,
    TableSummaryRow,
    TableSummaryCell,
};
