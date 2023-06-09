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
