import type { ColumnType } from 'ant-design-vue/lib/table';

export interface SearchBaseProps {
    rename?: string;
    type?:
        | 'select'
        | 'number'
        | 'string'
        | 'treeSelect'
        | 'date'
        | 'time'
        | 'rangePicker'
        | 'component'
        | 'timeRange';
    format?: string;
    options?: any[] | Function;
    first?: boolean;
    defaultTermType?: string; // 默认 eq
    defaultValue?: any; // 默认值
    defaultOnceValue?: any; // 会被重置掉的默认值
    title?: ColumnType['title'];
    sortIndex?: number;
    componentProps?: any;
    handleValue?: (value: SearchItemData) => any;
}

export interface SearchItemProps {
    rename?: SearchBaseProps['rename'];
    title: string;
    column: string | number | ColumnType['dataIndex'];
}

export interface SearchItemData {
    column: string | number | ColumnType['dataIndex'];
    value: any;
    termType: string;
    type?: string;
}

export interface TermsItem {
    terms: SearchItemData[];
    type?: string;
}

export interface Terms {
    terms: TermsItem[];
}

export interface SortItem {
    name: string;
    order?: 'desc' | 'asc';
    value?: any;
}

export interface SearchHistoryList {
    content?: string;
    name: string;
    id: string;
    key: string;
}

export interface SearchProps
    extends Omit<SearchBaseProps, 'title'>,
        SearchItemProps {}

export interface JColumnsProps extends ColumnType {
    scopedSlots?: boolean;
    search: SearchProps;
}
