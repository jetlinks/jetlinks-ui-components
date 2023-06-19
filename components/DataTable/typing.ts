import { Rule } from 'ant-design-vue/lib/form'
export interface DataEntryData {
    type?:
        | 'select'
        | 'input'
    format?: string;
    options?: any[] | Function;
    rule: Function;
    defaultValue?: any; // 默认值
    sortIndex?: number;
    componentProps?: any;
}

export type DataTableColumnsType = {
    title: string,
    dataIndex: string | number,
    width: string,
    type: string
    form?: {
        rules: Rule[]
    }
}