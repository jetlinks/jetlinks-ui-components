import Sortable from 'sortablejs';
import { cloneDeep, isArray, omit, uniqueId } from 'lodash-es';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
import type { Ref } from 'vue';

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
            case 13:
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

export const getElData = (target: any) => {
    let currentEl = target;
    let off = true;
    let position = [];
    if (target.className.includes('ant-table-cell')) {
        let _dataset = target.querySelector('.j-row-click')?.dataset;
        position = ['td', Number(_dataset.index), _dataset.name];
    } else if (target.className.includes('j-row-click')) {
        let _dataset = target.dataset;
        position = ['td', Number(_dataset.index), _dataset.name];
    } else {
        while (off) {
            if (
                !currentEl.parentNode.className ||
                currentEl.parentNode.className.includes('ant-table-cell')
            ) {
                off = false;
            } else if (currentEl.parentNode.className.includes('j-row-click')) {
                off = false;
                let _dataset = currentEl.parentNode.dataset;
                position = ['td', Number(_dataset.index), _dataset.name];
            } else {
                currentEl = currentEl.parentNode;
            }
        }
    }

    return position;
};

export const useVirtualScrolling = (
    target: HTMLDivElement,
    dataSource: any[],
    height: number,
) => {
    // const renderTable = ref([])
    // const index = ref(0)
    // const virtualEl = document.createElement('div')
    // const bodyEl = target.querySelector('.ant-table-tbody') as HTMLElement
    // bodyEl.style.position = 'absolute'
    // const cellHeight = (target.querySelector('.ant-table-cell') as HTMLElement ).offsetHeight || 44
    // virtualEl.style.height = dataSource.length * cellHeight + 'px'
    // bodyEl.appendChild(virtualEl)
    // console.log(virtualEl);
    // const scroll = () => {
    //     let scrollTop = bodyEl.scrollTop
    //     index.value = Math.floor(scrollTop / cellHeight)
    //     bodyEl.style.transform = `translateY(${index.value * cellHeight}px)`
    // }
    // bodyEl.addEventListener('scroll', scroll, {passive: true})
};
