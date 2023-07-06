<template>
    <PopconfirmModal
        :body-style="{ paddingTop: '4px', width: width }"
        :placement="placement"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <div>
                <Scrollbar height="280">
                    <DataTable
                        ref="tableRef"
                        v-model:data-source="newSource"
                        :columns="columns"
                        :serial="true"
                        :children="true"
                        :show-tool="false"
                    >
                        <template
                            v-for="item in columns"
                            #[item.dataIndex]="{ data }"
                        >
                            <slot
                                v-if="item.dataIndex === 'action'"
                                :name="item.dataIndex"
                                :data="data"
                            >
                                <Button
                                    type="link"
                                    @click="() => deleteItem(data.index)"
                                >
                                    <AIcon type="DeleteOutlined" />
                                </Button>
                            </slot>
                            <slot v-else :name="item.dataIndex" :data="data" />
                        </template>
                    </DataTable>
                </Scrollbar>
                <Button style="width: 100%; margin-top: 12px" @click="addItem"
                    >新增</Button
                >
            </div>
        </template>
        <Icon />
    </PopconfirmModal>
</template>

<script setup lang="ts" name="Object">
import DataTable from '../../dataTable.vue';
import { ref, watch } from 'vue';
import { Button, PopconfirmModal, Scrollbar, AIcon } from '../../../components';
import Icon from '../Icon.vue';
import { isFunction } from 'lodash-es';

type Emits = {
    (e: 'update:value', data: any): void;
    (e: 'confirm', data: any): void;
};

const emit = defineEmits<Emits>();

const props = defineProps({
    value: {
        type: Array,
        default: () => [],
    },
    width: {
        type: String,
        default: '600px',
    },
    columns: {
        type: Array,
        default: () => [],
    },
    placement: {
        type: String,
        default: 'top',
    },
    onAdd: {
        type: Function,
        default: undefined,
    },
});
interface obj {
    [idx: string]: any;
}

const newSource = ref(props.value || []); //将null类型转为数组
const tableRef = ref();

const addItem = () => {
    let object: any = {};

    if (props.onAdd && isFunction(props.onAdd)) {
        object = props.onAdd();
    } else {
        props.columns.forEach((item: any) => {
            if (item.dataIndex !== 'action') {
                object[item!.dataIndex] = undefined;
            }
        });
    }

    // tableRef.value?.addItem(object);
    newSource.value.push(object);
};

const deleteItem = (index) => {
    // tableRef.value?.removeItem(index);
    newSource.value.splice(index, 1);
};

const cancel = () => {
    tableRef.value?.initItems();
};

watch(
    () => JSON.stringify(newSource.value),
    () => {
        emit('update:value', newSource.value);
    },
);

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        tableRef.value
            ?.getData()
            .then((data) => {
                resolve(true);
                emit('update:value', data);
                emit('confirm', data);
            })
            .catch(() => {
                reject(false);
            });
    });
};
</script>

<style scoped></style>
