import Sortable from 'sortablejs';
import { cloneDeep, isArray, omit, uniqueId } from 'lodash-es';
import { ref } from 'vue';
export const draggableClassName = 'draggable-item';
export const sortTableHandle = (
    ele: HTMLElement,
    onEnd: (oldIndex: number, newIndex: number) => void,
) => {
    const sortTable = new Sortable(ele as HTMLElement, {
        handle: `.${draggableClassName}`,
        draggable: '.ant-table-row',
        animation: 200,
        ghostClass: 'draggable-ghost',
        sort: true,
        onEnd: ({ oldIndex, newIndex }) => {
            onEnd(oldIndex, newIndex);
        },
    });

    return sortTable;
};

/**
 * 方向操作
 */
export const useDirection = (selectKey: string, validate: boolean) => {};

export const setUUIDbyDataSource = (data: any[]) => {
    return isArray(data)
        ? cloneDeep(data).map((item: any) => {
              const uuid = uniqueId('control');
              return { ...item, _uuid: uuid };
          })
        : data;
};

export const cleanUUIDbyData = (data: any) => {
    return isArray(data)
        ? cloneDeep(data).map((item: any) => {
              const { _uuid, ...extra } = item;
              return extra;
          })
        : data;
};

export const initControlDataSource = () => {
    const controlDataMap = ref<Map<string, any>>(new Map());

    const setControlData = (data: any[]) => {
        if (isArray(data)) {
            controlDataMap.value.clear();
            data.forEach((item) => {
                if (item._uuid) {
                    controlDataMap.value.set(item._uuid, omit(item, ['_uuid']));
                }
            });
        }
    };

    const getControlData = (record: any) => {
        const { _uuid } = record;
        if (_uuid && controlDataMap.value.has(_uuid)) {
            return controlDataMap.value.get(_uuid);
        }
        return undefined;
    };

    return {
        setControlData,
        getControlData,
    };
};
