import Sortable from 'sortablejs';
import { cloneDeep, isArray, omit, uniqueId } from 'lodash-es';
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';

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
export const useDirection = (
    cb: (direction: 'up' | 'down' | 'left' | 'right') => void,
) => {
    const keyDown = (e) => {
        // 判断当前标签页状态, 标签未激活禁止操作
        const isHidden = document.hidden;
        if (isHidden) return;

        const keyCode = e.keyCode;

        switch (keyCode) {
            case 37:
                cb('left');
                break;
            case 38:
                cb('up');
                break;
            case 39:
                cb('right');
                break;
            case 40:
                cb('down');
                break;
        }
    };

    onMounted(() => {
        document.addEventListener('keydown', keyDown);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('keydown', keyDown);
    });
};

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
