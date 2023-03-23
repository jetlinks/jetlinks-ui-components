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
                                        iItem.value !== '',
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
            return cloneParams
                .filter(
                    (iItem) =>
                        iItem &&
                        iItem.value !== undefined &&
                        iItem.value !== '',
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

export const handleQData = (q: string): any => {
    try {
        const termsData = JSON.parse(q);
        // 排序, null 往后放
        termsData.terms.forEach((a) => {
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
        return termsData;
    } catch (e) {
        console.warn(`Search组件中handleUrlParams处理JSON时异常：【${e}】`);
    }
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
