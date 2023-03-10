<template>
    <div class="JSearch-item">
        <template v-if="!onlyValue">
            <div v-if="expand" class="JSearch-item--type">
                <j-select
                    v-if="index !== 1 && index !== 4"
                    v-model:value="termsModel.type"
                    :options="typeOptions"
                    style="width: 100%"
                    @change="valueChange"
                />
                <span v-else>
                    {{ index === 1 ? '第一组' : '第二组' }}
                </span>
            </div>
            <j-select
                v-model:value="termsModel.column"
                class="JSearch-item--column"
                :options="columnOptions"
                @change="columnChange"
            />
            <j-select
                v-model:value="termsModel.termType"
                class="JSearch-item--termType"
                :options="termTypeOptions.option"
                @change="termTypeChange"
            />
        </template>
        <template v-else>
            <div class="JSearch-item--label">
                {{ columnOptions[0]?.label }}
            </div>
        </template>
        <div class="JSearch-item--value">
            <j-input
                v-if="component === componentType.input"
                v-bind="cProps"
                v-model:value="termsModel.value"
                style="width: 100%"
                @change="valueChange"
            />
            <j-select
                v-else-if="component === componentType.select"
                v-bind="cProps"
                v-model:value="termsModel.value"
                style="width: 100%; min-width: 80px"
                show-search
                :loading="optionLoading"
                :options="options"
                :filter-option="
                    (v, option) => filterSelectNode(v, option, 'label')
                "
                @change="valueChange"
            />
            <j-input-number
                v-else-if="component === componentType.inputNumber"
                v-bind="cProps"
                v-model:value="termsModel.value"
                style="width: 100%"
                @change="valueChange"
            />
            <j-input-password
                v-else-if="component === componentType.password"
                v-bind="cProps"
                v-model:value="termsModel.value"
                style="width: 100%"
                @change="valueChange"
            />
            <j-switch
                v-else-if="component === componentType.switch"
                v-bind="cProps"
                v-model:checked="termsModel.value"
                style="width: 100%"
                @change="valueChange"
            />
            <j-radio-group
                v-else-if="component === componentType.radio"
                v-bind="cProps"
                v-model:value="termsModel.value"
                style="width: 100%"
                @change="valueChange"
            />
            <j-checkbox-group
                v-else-if="component === componentType.checkbox"
                v-model:value="termsModel.value"
                style="width: 100%"
                v-bind="cProps"
                :options="options"
                @change="valueChange"
            />
            <j-time-picker
                v-else-if="component === componentType.time"
                v-model:value="termsModel.value"
                value-format="HH:mm:ss"
                style="width: 100%"
                v-bind="cProps"
                @change="valueChange"
            />
            <j-time-range-picker
                v-else-if="component === componentType.timeRange"
                v-model:value="termsModel.value"
                value-format="HH:mm:ss"
                style="width: 100%"
                v-bind="cProps"
                @change="valueChange"
            />
            <j-date-picker
                v-else-if="component === componentType.date"
                v-model:value="termsModel.value"
                show-time
                value-format="YYYY-MM-DD HH:mm:ss"
                style="width: 100%"
                v-bind="cProps"
                @change="valueChange"
            />
            <j-range-picker
                v-else-if="component === componentType.rangePicker"
                v-model:value="termsModel.value"
                show-time
                value-format="YYYY-MM-DD HH:mm:ss"
                style="width: 100%"
                v-bind="cProps"
                @change="valueChange"
            />
            <j-tree-select
                v-else-if="component === componentType.treeSelect"
                v-model:value="termsModel.value"
                show-search
                style="width: 100%"
                :height="350"
                :field-names="{ label: 'name', value: 'id' }"
                v-bind="cProps"
                :tree-data="options"
                :filter-tree-node="
                    (v, option) => filterTreeSelectNode(v, option)
                "
                @change="valueChange"
            />
        </div>
    </div>
</template>

<script setup lang="ts" name="SearchItem">
import { typeOptions, termType, componentType } from './setting';
import type { PropType } from 'vue';
import { watch, ref, reactive, onBeforeMount, nextTick } from 'vue';
import type { SearchItemData, SearchProps, Terms } from './typing';
import { cloneDeep, get, isArray, isFunction, omit } from 'lodash-es';
import { filterTreeSelectNode, filterSelectNode } from './util';
import {
    TreeSelect as JTreeSelect,
    Select as JSelect,
    Input as JInput,
    InputNumber as JInputNumber,
    DatePicker as JDatePicker,
    TimePicker as JTimePicker,
    InputPassword as JInputPassword,
    Switch as JSwitch,
    RadioGroup as JRadioGroup,
    CheckboxGroup as JCheckboxGroup,
    RangePicker as JRangePicker,
    TimeRangePicker as JTimeRangePicker,
} from '../components';
import { useUrlSearchParams } from '@vueuse/core';

type ItemType = SearchProps['type'];

type UrlParam = {
    q: string | null;
    target: string | null;
};

interface Emit {
    (e: 'change', data: SearchItemData): void;
}

const props = defineProps({
    columns: {
        type: Array as PropType<SearchProps[]>,
        default: () => [],
        required: true,
    },
    index: {
        type: Number,
        default: 1,
    },
    expand: {
        type: Boolean,
        default: false,
    },
    termsItem: {
        type: Object as PropType<Terms>,
        default: () => ({}),
    },
    componentProps: {
        type: Object,
        default: () => ({}),
    },
    onlyValue: {
        type: Boolean,
        default: false,
    },
    reset: {
        type: Number,
        default: 1,
    },
});

const urlParams = useUrlSearchParams<UrlParam>('hash');

type optionItemType = { label: string; value: any };

const emit = defineEmits<Emit>();

const termsModel = reactive<SearchItemData>({
    type: 'or',
    value: '',
    termType: 'like',
    column: '',
});

const component = ref(componentType.input);
const cProps = ref({});

const options = ref<any[]>([]);

const columnOptions = ref<optionItemType[]>([]);
const columnOptionMap = new Map();

const termTypeOptions = reactive({ option: termType });

const optionLoading = ref(false);

/**
 * 根据类型切换默termType值
 * @param type
 */
const getTermType = (type?: ItemType) => {
    termTypeOptions.option = termType;
    switch (type) {
        case 'select':
        case 'treeSelect':
        case 'number':
            return 'eq';
        case 'date':
        case 'time':
            // 时间只有大于或小于两个值
            termTypeOptions.option = termType.filter((item) =>
                ['gt', 'lt'].includes(item.value),
            );
            return 'gt';
        case 'timeRange':
        case 'rangePicker':
            termTypeOptions.option = termType.filter((item) =>
                ['btw', 'nbtw'].includes(item.value),
            );
            return 'btw';
        default:
            return 'like';
    }
};

/**
 * 根据类型返回组件
 * @param type
 */
const getComponent = (type?: ItemType) => {
    switch (type) {
        case 'select':
            component.value = componentType.select;
            break;
        case 'treeSelect':
            component.value = componentType.treeSelect;
            break;
        case 'date':
            component.value = componentType.date;
            break;
        case 'time':
            component.value = componentType.time;
            break;
        case 'number':
            component.value = componentType.inputNumber;
            break;
        case 'timeRange':
            component.value = componentType.timeRange;
            break;
        case 'rangePicker':
            component.value = componentType.rangePicker;
            break;
        default:
            component.value = componentType.input;
            break;
    }
};

const removeOptionByKey = (options: any[]): any[] => {
    return options.map((item) => {
        if (item.children) {
            item.children = removeOptionByKey(item.children);
        }
        return omit(item, ['key']);
    });
};

const handleItemOptions = (option?: any[] | Function) => {
    options.value = [];
    if (isArray(option)) {
        options.value = option;
    } else if (isFunction(option)) {
        optionLoading.value = true;
        option()
            .then((res: any[]) => {
                optionLoading.value = false;
                options.value = removeOptionByKey(res);
            })
            .catch((_: any) => {
                optionLoading.value = false;
            });
    }
};

const columnChange = (value: string, isChange: boolean) => {
    const item = columnOptionMap.get(value);

    cProps.value = item.componentProps;
    optionLoading.value = false;
    // 设置value为undefined
    termsModel.column = value;
    termsModel.termType = item.defaultTermType || getTermType(item.type);

    getComponent(item.type); // 处理Item的组件类型

    // 处理options 以及 request
    if ('options' in item) {
        handleItemOptions(item.options);
    }

    termsModel.value = undefined;

    if (isChange) {
        valueChange();
    }
};

const handleItem = () => {
    columnOptionMap.clear();
    columnOptions.value = [];
    if (!props.columns.length) return;

    columnOptions.value = props.columns.map((item) => {
        // 对columns进行Map处理以及值处理
        columnOptionMap.set(item.column, item);
        return {
            label: item.title,
            value: item.column,
        };
    });
    if (!props.onlyValue) {
        // 获取第一个值
        const sortColumn = cloneDeep(props.columns);
        sortColumn?.sort((a, b) => a.sortIndex! - b.sortIndex!);

        const _index =
            props.index > sortColumn.length
                ? sortColumn.length - 1
                : props.index;
        const _itemColumn = sortColumn[_index - 1];
        columnChange(_itemColumn.column as string, false);
    } else {
        columnChange(props.columns[0]?.column as string, false);
    }
};

const termTypeChange = () => {
    valueChange();
};

const valueChange = () => {
    emit('change', {
        type: props.onlyValue ? 'and' : termsModel.type,
        value: termsModel.value,
        termType: termsModel.termType,
        column: termsModel.column,
    });
};

const reset = () => {
    termsModel.value = undefined;
};
const handleQuery = (_params: UrlParam) => {
    if (_params.q) {
        const path =
            props.index < 4
                ? [0, 'terms', props.index - 1]
                : [1, 'terms', props.index - 4];
        const itemData: SearchItemData = get(props.termsItem.terms, path);
        if (itemData) {
            termsModel.type = itemData.type;
            termsModel.column = itemData.column;
            termsModel.termType = itemData.termType;
            termsModel.value = itemData.value;
            const item = columnOptionMap.get(itemData.column);
            getComponent(item.type); // 处理Item的组件类型

            // 处理options 以及 request
            if ('options' in item) {
                handleItemOptions(item.options);
            }
        }
    }
};

handleItem();

onBeforeMount(() => {
    cProps.value = props.componentProps;
});

nextTick(() => {
    handleQuery(urlParams);
});

watch(
    () => props.reset,
    () => {
        handleItem();
    },
);

defineExpose({
    reset,
});
</script>

<style scoped lang="less"></style>
