import { cloneDeep, isFunction, isString } from 'lodash-es';
import type { SearchItemData } from './typing';
import { termType } from './setting';
import { SearchProps } from './typing';

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

    if (!_item) return item;
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
    searchType: string = 'terms',
) => {
    // 过滤掉terms中value无效的item
    const cloneParams = cloneDeep(terms);
    if (searchType == 'terms') {
        if (type === 'adv') {
            return {
                terms: cloneParams.terms
                    .map((item) => {
                        if (item.terms) {
                            item.terms = item.terms
                                .filter(
                                    (iItem) =>
                                        iItem &&
                                        iItem.value !== undefined &&
                                        iItem.value !== '' &&
                                        iItem.column !== undefined,
                                )
                                .map((iItem) =>
                                    handleItemValue(iItem, columnOptionMap),
                                );
                        }
                        return item;
                    })
                    .filter((item) => item.terms.length),
            };
        } else {
            console.log('cloneParams', cloneParams);
            return cloneParams
                .filter(
                    (iItem) =>
                        iItem &&
                        iItem.value !== undefined &&
                        iItem.value !== '' &&
                        iItem.column !== undefined,
                )
                .map((iItem) => handleItemValue(iItem, columnOptionMap));
        }
    } else if (searchType == 'object') {
        let result = {};
        cloneParams
            .filter(
                (item) => item && item.value !== undefined && item.value !== '',
            )
            .forEach((item) => {
                Object.assign(result, { [item.column]: item.value });
            });
        return result;
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

export const handleQData = (terms: any): any => {
    // 排序, null 往后放
    terms.terms.forEach((a) => {
        for (let i = 0; i < a.terms.length; i++) {
            for (let j = 0; j < a.terms.length - i - 1; j++) {
                if (!a.terms[j] && a.terms[j + 1]) {
                    const temp = a.terms[j];
                    a.terms[j] = a.terms[j + 1];
                    a.terms[j + 1] = temp;
                }
            }
        }
    });

    return terms;
};

export const hasExpand = (terms): boolean => {
    let itemCount = 0;
    terms.forEach((a) => {
        a.terms.forEach((b) => {
            if (b) {
                itemCount += 1;
            }
        });
    });
    return itemCount >= 2;
};

export const compatibleOldTerms = (
    q: string = '{"terms":[{"terms":[{"column":"name","termType":"like","value":"111","type":"and"}]}]}',
) => {
    const _terms = [
        { terms: [null, null, null] },
        { terms: [null, null, null], type: 'and' },
    ];

    try {
        const terms = JSON.parse(q || '{}');
        terms.terms?.forEach((a, aIndex) => {
            a?.terms?.forEach((b, bIndex) => {
                _terms[aIndex].terms[bIndex] = b;
            });
            if (a.type) {
                _terms[aIndex].type = a.type;
            }
        });
        return { terms: _terms };
    } catch (e) {
        return { terms: _terms };
    }
};

export const handleParamsToString = (
    terms: SearchItemData[] = [],
    type: string = 'and',
) => {
    const _terms = [
        { terms: [null, null, null] },
        { terms: [null, null, null], type: type },
    ];
    let termsIndex = 0;
    let termsStar = 0;
    terms.forEach((item, index) => {
        if (index > 2) {
            termsIndex = 1;
            termsStar = 4;
        }
        _terms[termsIndex].terms[index - termsStar] = item;
    });

    return JSON.stringify({ terms: _terms });
};

export const getTermTypeFn = (type?: SearchProps['type'], column?: string) => {
    if (column?.includes('id') && type === 'string') {
        // 默认id为 eq
        return 'eq';
    }

    switch (type) {
        case 'select':
        case 'treeSelect':
        case 'number':
            return 'eq';
        case 'date':
        case 'time':
            return 'gt';
        case 'timeRange':
        case 'rangePicker':
            return 'btw';
        default:
            return 'like';
    }
};

export const getTermTypes = (types: string[]) => {
    return termType.filter((item) => types.includes(item.value));
};

export const getTermOptions = (type?: SearchProps['type'], column?: string) => {
    let keys: string[] = [];
    switch (type) {
        case 'select':
        case 'treeSelect':
            keys = column?.includes('state') ? ['not'] : ['eq'];
            break;
        case 'time':
        case 'date':
            keys = ['gt', 'lt'];
            break;
        case 'timeRange':
        case 'rangePicker':
            keys = ['btw', 'nbtw'];
            break;
        case 'number':
            keys = ['eq'];
            break;
        default:
            keys =
                column?.includes('id') && type === 'string'
                    ? ['eq']
                    : ['like', 'nlike'];
            break;
    }
    return keys.length ? getTermTypes(keys) : termType;
};
