import { cloneDeep, isFunction, isString } from 'lodash-es';

/**
 * 处理like，nlike特殊值
 * @param v
 */
export const handleLikeValue = (v: string) => {
    if (isString(v)) {
        return v.split('').reduce((pre: string, next: string) => {
            let _next = next;
            if (next === '\\') {
                _next = '\\\\';
            } else if (next === '%') {
                _next = '\\%';
            }
            return pre + _next;
        }, '');
    }
    return v;
};

const handleItemValue = (item, columnOptionMap) => {
    const _item = columnOptionMap.get(item.column);
    if (_item.rename) {
        item.column = _item.rename;
    }

    if (_item.handleValue && isFunction(_item.handleValue)) {
        item.value = _item.handleValue(item.value);
    }

    if (['like', 'nlike'].includes(item.termType) && !!item.value) {
        item.value = `%${handleLikeValue(item.value)}%`;
    }
    return item;
};

/**
 * 处理为外部使用
 * @terms {Array} 表单数据
 * @columnOptionMap {Map} column的Map对象
 */
export const termsParamsFormat = (
    terms,
    columnOptionMap,
    type: string = 'adv',
) => {
    // 过滤掉terms中value无效的item
    const cloneParams = cloneDeep(terms);
    if (type === 'adv') {
        return {
            terms: cloneParams.terms.map((item) => {
                if (item.terms) {
                    item.terms = item.terms
                        .filter((iItem) => iItem && iItem.value)
                        .map((iItem) =>
                            handleItemValue(iItem, columnOptionMap),
                        );
                }
                return item;
            }),
        };
    } else {
        return cloneParams
            .filter((iItem) => iItem && iItem.value)
            .map((iItem) => handleItemValue(iItem, columnOptionMap));
    }
};

/**
 * TreeSelect过滤
 * @param value 过滤值
 * @param treeNode
 * @param key
 */
export const filterTreeSelectNode = (
    value: string,
    treeNode: any,
    key: string = 'name',
): boolean => {
    return treeNode[key]?.includes(value);
};

/**
 * Select过滤
 * @param value 过滤值
 * @param option
 * @param key
 */
export const filterSelectNode = (
    value: string,
    option: any,
    key: string = 'label',
): boolean => {
    return option[key]?.includes(value);
};
