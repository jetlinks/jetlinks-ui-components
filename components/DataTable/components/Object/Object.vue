<template>
    <PopconfirmModal
        body-style="padding-top:4px;width:600px;"
        @confirm="confirm"
    >
        <template #content>
            <div>
                <Scrollbar height="300">
                    <DataTable
                        ref="tableRef"
                        :columns="columns"
                        :serial="true"
                        :new-source="newSource"
                        :childe="true"
                    ></DataTable>
                </Scrollbar>
                <Button
                    type="primary"
                    style="width: 100%; margin-top: 12px"
                    @click="addItem"
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
import { Button, PopconfirmModal, Scrollbar } from '../../../components';
import Icon from '../Icon.vue';

type Emits = {
    (e: 'update:value', data: any): void;
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

    newSource.value.push(object);
};

const confirm = () => {
    return new Promise(async (resolve, reject) => {
        tableRef.value
            ?.getData()
            .then((data) => {
                resolve(true);
                emit('update:value', data);
            })
            .catch(() => {
                reject(false);
            });
    });
};
</script>

<style scoped></style>
