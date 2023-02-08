export interface ActionType {
    name: string;
    icon: string;
    disabled: boolean;
    // eslint-disable-next-line @typescript-eslint/ban-types
    onClick: Function;
}
