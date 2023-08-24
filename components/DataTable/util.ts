import Sortable from 'sortablejs';
import { cloneDeep, isArray, omit, uniqueId } from 'lodash-es';
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    watch,
} from 'vue';
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

export const getUUID = () => {
    return uniqueId('control');
};
export const setUUIDbyDataSource = (data: any[]) => {
    return isArray(data)
        ? cloneDeep(data).map((item: any, index) => {
              if (item._sortIndex === undefined) {
                  item['_sortIndex'] = index;
              }
              if (item._uuid) {
                  return item;
              } else {
                  const uuid = getUUID();
                  return { ...item, index: index + 1, _uuid: uuid };
              }
          })
        : data;
};

export const cleanUUIDbyData = (data: any) => {
    return isArray(data)
        ? cloneDeep(data).map((item: any) => {
              const { _uuid, index, _sortIndex, ...extra } = item;
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
    if (!target || !target?.className || !target?.className?.includes)
        return [];
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
    cb: (data: any[]) => void,
) => {
    const buffer = 200;
    const renderTable = ref([]);
    const currentData = ref(dataSource || []);
    const top = ref();
    const bottom = ref();

    const start = ref(0);
    const end = ref();

    const toTop = ref(0);

    const scrollBox = ref();
    const sizes = ref({});
    const itemHeight = 46;

    const offsetMap = computed(() => {
        let total = 0;

        const res = currentData.value.reduce((prev, current) => {
            const key = current['_uuid'];
            prev[key] = total;
            const curSize = sizes.value[key] || itemHeight;
            total += curSize;
            return prev;
        }, {});
        return res;
    });

    const setTop = () => {
        toTop.value =
            target.getBoundingClientRect().top -
            scrollBox.value?.getBoundingClientRect().top +
            scrollBox.value.offsetTop;
    };

    const getItemOffsetTop = (index) => {
        const item = currentData.value[index];
        if (item) {
            const key = item['_uuid'];
            return offsetMap.value[key] || 0;
        }
        return 0;
    };

    const updateSizes = () => {
        const rows = target.querySelectorAll('.ant-table-row');

        Array.from(rows).forEach((row: HTMLElement, index) => {
            const item = renderTable.value[index];
            if (!item) return;

            // 计算表格行的高度

            let offsetHeight = row.offsetHeight;
            const key = item['_uuid'];
            if (sizes.value[key] !== offsetHeight) {
                sizes.value[key] = offsetHeight;
            }
        });
    };

    const calcRenderData = () => {
        const _top = scrollBox.value.scrollTop - toTop.value - buffer;
        let _bottom =
            scrollBox.value.scrollTop +
            scrollBox.value.offsetHeight +
            buffer -
            toTop.value;

        if (_bottom < height) {
            _bottom = height;
        }
        let _start;
        let _end;

        let l = 0;
        let r = currentData.value.length - 1;
        let mid = 0;
        while (l <= r) {
            mid = Math.floor((l + r) / 2);
            const mindVal = getItemOffsetTop(mid);
            if (mindVal < _top) {
                const mindNextVal = getItemOffsetTop(mid + 1);
                if (mindNextVal > _top) break;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        _start = mid;
        _end = currentData.value.length - 1;
        for (let i = _start + 1; i < currentData.value.length; i++) {
            const offsetTop = getItemOffsetTop(i);
            if (offsetTop >= _bottom) {
                _end = i;
                break;
            }
        }

        if (_start % 2) {
            _start = _start - 1;
        }
        top.value = _top;
        bottom.value = _bottom;
        start.value = _start;
        end.value = _end;
        console.log(currentData.value);
        renderTable.value = currentData.value.slice(_start, _end + 1);

        cb?.(renderTable.value);
    };

    const getItemSize = (index) => {
        if (index <= -1) return 0;
        const item = currentData.value[index];
        if (item) {
            const key = item['_uuid'];
            return sizes.value[key] || itemHeight;
        }
        return itemHeight;
    };

    const calcPosition = () => {
        const last = currentData.value.length - 1;
        const warpHeight = getItemOffsetTop(last) + getItemSize(last);
        const offsetTop = getItemOffsetTop(start.value);

        const tableEl = target.querySelector('.ant-table-body') as any;

        if (!tableEl) return;

        if (!tableEl.warpEl) {
            const warpEl = document.createElement('div');
            const innerEl = document.createElement('div');
            warpEl.appendChild(innerEl);
            innerEl.appendChild(tableEl.children[0]);
            tableEl.insertBefore(warpEl, tableEl.firstChild);
            tableEl.warpEl = warpEl;
            tableEl.innerEl = innerEl;
        }
        if (tableEl.warpEl) {
            tableEl.warpEl.style.height = warpHeight + 'px';
            tableEl.innerEl.style.transform = `translateY(${offsetTop}px)`;
        }
    };

    const onScroll = () => {
        // 移动选中状态项
        // 删除编辑项
        // 更新当前尺寸
        updateSizes();
        // 计算数据
        calcRenderData();
        // 计算位置
        calcPosition();
    };

    const initScroll = () => {
        scrollBox.value.addEventListener('scroll', onScroll);
        setTop();
        setTimeout(() => {
            onScroll();
        }, 2000);
    };

    const update = (newData: any[] = []) => {
        console.log('update');
        currentData.value = newData;
        setTop();
        onScroll();
    };

    if (height) {
        scrollBox.value = target?.querySelector('.ant-table-body');
        initScroll();
    }

    watch(
        dataSource,
        () => {
            console.log('dataSource');
            update(dataSource);
        },
        { deep: true },
    );

    return {
        update,
    };
};
