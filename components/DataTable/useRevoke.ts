import { onMounted, watch, ref, onBeforeMount } from 'vue';
import { cloneDeep, isEqual } from 'lodash-es';

type ReovkeOptions = {
    undo: (data: any) => void;
};
const useRevoke = (initData?: any[], options?: ReovkeOptions) => {
    const history = ref<any[]>([]);
    const currentIndex = ref(-1);
    const currrent = ref<any>();

    const historyMax = 20; // 最多记录多少条数

    /**
     * 撤销
     */
    const undo = () => {
        console.log('undo0', history.value);
        if (history.value.length > 1) {
            history.value.pop();
            currentIndex.value--;
            currrent.value = history.value[currentIndex.value];
            options?.undo(cloneDeep(currrent.value));
        }
    };

    /**
     * 新增
     * @param data
     */
    const updateState = (data: any) => {
        const cloneData = cloneDeep(data);
        // 判断是否完全相等
        const length = history.value.length;
        if (length) {
            console.log(
                isEqual(
                    [
                        [1, 2],
                        [2, 1],
                    ],
                    [
                        [2, 1],
                        [1, 2],
                    ],
                ),
            );
            console.log(
                JSON.stringify(cloneData),
                JSON.stringify(history.value[length - 1]),
            );

            if (isEqual(cloneData, history.value[length - 1])) {
                return;
            }
        }

        if (history.value.length === historyMax) {
            history.value.shift(); // 删除第一个记录
        }
        console.log('updateState', history.value);
        history.value.push(cloneDeep(cloneData));
        currentIndex.value++;
    };

    const keyDown = (e: any) => {
        if (e.ctrlKey && e.keyCode === 90) {
            undo();
        }
    };

    watch(
        () => initData,
        () => {
            updateState(initData);
        },
        { deep: true },
    );

    onMounted(() => {
        document.addEventListener('keydown', keyDown);
    });

    onBeforeMount(() => {
        console.log('销毁');
        document.removeEventListener('keydown', keyDown);
    });

    return {
        updateState,
        data: currrent,
    };
};

export default useRevoke;
