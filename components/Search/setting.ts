import { PropType } from 'vue';
import { JColumnsProps } from './typing';

export const optionsMapKey = Symbol('searchOptionsMap');
export const basicSearch = {
    columns: {
        type: Array as PropType<JColumnsProps[]>,
        default: () => [],
        required: true,
    },
    type: {
        type: String,
        default: 'advanced',
    },
};

export const typeOptions = [
    { label: '或者', value: 'or' },
    { label: '并且', value: 'and' },
];

export const TermTypeMap = {
    EQ: { label: '=', value: 'eq' },
    NOT: { label: '!=', value: 'not' },
    LIKE: { label: '包含', value: 'like' },
    NLIKE: { label: '不包含', value: 'nlike' },
    GT: { label: '>', value: 'gt' },
    GTE: { label: '>=', value: 'gte' },
    LT: { label: '<', value: 'lt' },
    LTE: { label: '<=', value: 'lte' },
    IN: { label: '在...之中', value: 'in' },
    NIN: { label: '不在...之中', value: 'nin' },
    BTW: { label: '在...之间', value: 'btw' },
    NBTW: { label: '不在...之间', value: 'nbtw' },
};

export const termType = Object.values(TermTypeMap);

export const componentType = {
    input: 'input',
    inputNumber: 'inputNumber',
    password: 'password',
    switch: 'switch',
    radio: 'radio',
    checkbox: 'checkbox',
    time: 'time',
    date: 'date',
    timeRange: 'timeRange',
    rangePicker: 'rangePicker',
    treeSelect: 'treeSelect',
    upload: 'upload',
    tree: 'tree',
    select: 'select',
    component: 'component',
};
