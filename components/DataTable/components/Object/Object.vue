<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:600px;"
        @confirm="confirm"
        @cancel="cancel"
    >
        <template #content>
            <div>
                <Scrollbar height="280">
                    <DataTable
                        ref="tableRef"
                        :data-source="newSource"
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
import { ref } from 'vue';
import { Button, PopconfirmModal, Scrollbar, AIcon } from '../../../components';
import Icon from '../Icon.vue';

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
    columns: {
        type: Array,
        default: () => [],
    },
});
interface obj {
    [idx: string]: any;
}

const newSource = ref(props.value || []); //将null类型转为数组
const tableRef = ref();

const addItem = () => {
    const object: any = {};

    props.columns.forEach((item: any) => {
        object[item!.dataIndex] = undefined;
    });
    tableRef.value?.addItem(object);
};

const deleteItem = (index) => {
    tableRef.value?.removeItem(index);
};

const cancel = () => {
    tableRef.value?.initItems();
};

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
