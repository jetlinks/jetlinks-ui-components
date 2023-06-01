export const typeOptions = [
    { label: '或者', value: 'or' },
    { label: '并且', value: 'and' },
];

export const termType = [
    { label: '=', value: 'eq' },
    { label: '!=', value: 'not' },
    { label: '包含', value: 'like' },
    { label: '不包含', value: 'nlike' },
    { label: '>', value: 'gt' },
    { label: '>=', value: 'gte' },
    { label: '<', value: 'lt' },
    { label: '<=', value: 'lte' },
    { label: '属于', value: 'in' },
    { label: '不属于', value: 'nin' },
    { label: '在...之间', value: 'btw' },
    { label: '不在...之间', value: 'nbtw' },
];

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
