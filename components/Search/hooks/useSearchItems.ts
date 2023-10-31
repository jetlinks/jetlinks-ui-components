import { reactive, ref } from 'vue';
import type { Ref } from 'vue';
import type {
    JColumnsProps,
    SearchItemData,
    SearchProps,
    SearchItemProps,
} from '../typing';
import { sortBy } from 'lodash-es';

type OptionsType = {
    getDefaultValue: (terms: SearchItemData[]) => void;
};
const hasDefaultValue = (item) => {
    return (
        item.defaultValue !== undefined ||
        item.defaultTermType ||
        item.defaultOnceValue
    );
};
export const useSearchItems = (
    columns: JColumnsProps[],
    options: OptionsType,
): {
    searchItems: Ref<SearchProps[]>;
    searchOptionsMap: Ref<Map<string, SearchItemProps>>;
} => {
    const items = ref<SearchProps[]>([]);
    const optionsMap = ref(new Map());
    const handleColumns = () => {
        const _items = [];
        const values: SearchItemData[] = [];
        columns.forEach((item, index) => {
            const { search } = item;
            if (search && Object.keys(search).length) {
                optionsMap.value.set(item.dataIndex, search);

                if (hasDefaultValue(search)) {
                    const _value =
                        search.defaultValue || search.defaultOnceValue;

                    values.push({
                        type: 'and',
                        value: _value,
                        termType: search.defaultTermType || 'like',
                        column: item.dataIndex,
                    });
                }

                _items.push({
                    ...item.search,
                    sortIndex: item.search.first ? 0 : index + 1,
                    column: item.dataIndex,
                });
            }
        });
        items.value = sortBy(_items, 'sortIndex');

        options?.getDefaultValue(values);
    };

    handleColumns();

    return {
        searchItems: items,
        searchOptionsMap: optionsMap,
    };
};
