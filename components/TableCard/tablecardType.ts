export interface ActionType {
    name?: string;
    icon?: string;
    key?: string;
    disabled?: boolean;
    onClick?: Function;
}

export enum StatusType {
    'error' = '#F76F5D',
    'success' = '#24B276',
    'warn' = '#E7AD56',
    'default' = '#E0E0E0',
    'processing' = '#4293FF',
}
