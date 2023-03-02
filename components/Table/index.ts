import { withInstall } from '../util/type';
import Table from 'ant-design-vue/lib/table/Table';
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

export const JTable = withInstall(Table, 'JTable');
export const JTableColumn = withInstall(TableColumn, 'JTableColumn');
export const JTableColumnGroup = withInstall(
    TableColumnGroup,
    'JTableColumnGroup',
);
export const JTableSummary = withInstall(TableSummary, 'JTableSummary');
export const JTableSummaryRow = withInstall(
    TableSummaryRow,
    'JTableSummaryRow',
);
export const JTableSummaryCell = withInstall(
    TableSummaryCell,
    'JTableSummaryCell',
);

export default JTable;
