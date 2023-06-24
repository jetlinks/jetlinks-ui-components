import { onMounted, watch, ref } from 'vue';
import { cloneDeep } from 'lodash-es';

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
            console.log('undo1', history.value);
            console.log('undo2', currrent.value);
            options?.undo(currrent.value);
        }
    };

    /**
     * 新增
     * @param data
     */
    const updateState = (data: any) => {
        if (history.value.length === historyMax) {
            history.value.shift(); // 删除第一个记录
        }
        console.log('updateState', history.value);
        history.value.push(cloneDeep(data));
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
            console.log('watch', initData);
            updateState(initData);
        },
        { deep: true },
    );

    onMounted(() => {
        document.addEventListener('keydown', keyDown);
    });

    return {
        updateState,
        data: currrent,
    };
};

export default useRevoke;
