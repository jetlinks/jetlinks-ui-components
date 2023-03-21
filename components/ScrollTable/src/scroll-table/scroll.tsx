import {
    defineComponent,
    nextTick,
    onMounted,
    ref,
    computed,
    unref,
    getCurrentInstance,
} from 'vue';
import { memoize } from 'lodash';
import { Empty } from '../../../components';
import type { VNodeChild, CSSProperties } from 'vue';

interface ScrollTableProps {
    dataSource: Record<string, any>[];
    total: number;
    cardHeight: number;
    windowHeight: number;
    columnSpan: number;
    rowSpan: number;
    bodyStyle?: Record<string, any>;
    column: number;
}

const Scroll = defineComponent<ScrollTableProps>({
    name: 'Scroll',
    props: {
        dataSource: {
            type: Array,
            default: () => [],
        },
        total: {
            type: Number,
            default: 0,
        },
        windowHeight: {
            // 可视高度
            type: Number,
            default: 500,
        },
        bodyStyle: {
            type: Object,
            default: () => ({}),
        },
        column: {
            type: Number,
            default: 4,
        },
    } as any,
    slots: [
        'prev',
    ],
    emits: ['reachBottom'],
    setup(props: ScrollTableProps, { slots, emit }) {
        const windowRef = ref<HTMLElement>();
        const innerRef = ref<HTMLElement>();
        const itemRef = ref<HTMLElement>();

        const columnSpan = 20;
        const rowSpan = 20;

        const windowWidth = ref<number>(0);
        const _scrollTop = ref<number>(0);

        const loading = ref<boolean>(true);
        const cardWidth = ref<number>(0);
        const cardHeight = ref<number>(0);

        // 每排展示的卡片数量
        const totalRow = computed(() => props?.column || 4); // computed(() => Math.floor((windowWidth.value + rowSpan) / (cardWidth.value + rowSpan)))

        // 总共展示的列数
        const totalColumn = computed(() =>
            Math.ceil(props.total / totalRow.value),
        );

        const states = ref({
            isScrolling: false,
            scrollTop: 0,
            updateRequested: false,
            yAxisScrollDir: 'forward',
        });

        const useCache = () => {
            const vm = getCurrentInstance()!;

            return computed(() => {
                const _getItemStyleCache = (_: any) => ({});
                return memoize(_getItemStyleCache);
            });
        };

        const getItemStyleCache = useCache();

        /**
         * 计算可视区域的列
         */
        const getColumnsStartIndexForOffset = (scrollTop: number): number =>
            Math.max(
                0,
                Math.min(
                    totalColumn.value - 1,
                    Math.floor(
                        scrollTop / ((cardHeight.value + columnSpan) as number),
                    ),
                ),
            );

        const getColumnsStopIndexForStartIndex = (
            { windowHeight },
            startIndex: number,
            scrollTop: number,
        ): number => {
            const numVisibleRows = Math.ceil(
                (windowHeight as number) /
                    ((cardHeight.value + columnSpan) as number),
            );

            return Math.max(
                0,
                Math.min(
                    totalColumn.value - 1,
                    startIndex + numVisibleRows - 1, // -1 is because stop index is inclusive
                ),
            );
        };

        const columnsToRender = computed(() => {
            const { isScrolling, yAxisScrollDir, scrollTop } = unref(states);

            if (totalColumn.value === 0 || totalRow.value === 0) {
                return [0, 0, 0, 0];
            }

            const startIndex = getColumnsStartIndexForOffset(scrollTop);
            const stopIndex = getColumnsStopIndexForStartIndex(
                props,
                startIndex,
                scrollTop,
            );

            // const cacheBackward = !isScrolling || yAxisScrollDir === 'backward' ? 2 : 1
            // const cacheForward = !isScrolling || yAxisScrollDir === 'forward' ? 2 : 1

            return [
                Math.max(0, startIndex),
                Math.max(0, Math.min(totalColumn.value! - 1, stopIndex)),
                startIndex,
                stopIndex,
            ];
        });

        const emitEvents = () => {
            const { isScrolling, scrollTop, updateRequested, yAxisScrollDir } =
                unref(states);
            if (
                updateRequested &&
                isScrolling &&
                yAxisScrollDir === 'forward' &&
                scrollTop > 0
            ) {
                const t = scrollTop - _scrollTop.value;
                if (t > cardHeight.value * 2) {
                    _scrollTop.value = scrollTop;
                    emit('reachBottom', scrollTop);
                }
            }
        };

        const getScrollDir = (prev: number, cur: number) =>
            prev < cur ? 'forward' : 'backward';

        const resetIsScrolling = () => {
            states.value.isScrolling = false;
            nextTick(() => {
                getItemStyleCache.value(-1, null, null);
            });
        };

        const onUpdated = () => {
            const { scrollLeft, scrollTop, updateRequested } = unref(states);

            const windowElement = unref(windowRef);
            if (updateRequested && windowElement) {
                windowElement.scrollLeft = Math.max(0, scrollLeft);
                windowElement.scrollTop = Math.max(0, scrollTop);
            }
        };

        const onScroll = (e: Event) => {
            const {
                clientHeight,
                clientWidth,
                scrollHeight,
                scrollTop,
                scrollWidth,
            } = e.currentTarget as HTMLElement;

            const _states = unref(states);

            if (_states.scrollTop === scrollTop) {
                return;
            }

            const _scrollTop = Math.max(
                0,
                Math.min(scrollTop, scrollHeight - clientHeight),
            );
            states.value = {
                ..._states,
                isScrolling: true,
                scrollTop: _scrollTop,
                updateRequested: true,
                yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
            };

            nextTick(() => resetIsScrolling());

            onUpdated();
            emitEvents();
        };

        const getTopPosition = (index) =>
            index * ((cardHeight.value + columnSpan) as number);

        const getLeftPosition = (index) =>
            index * ((cardWidth.value + rowSpan) as number);

        const getItemStyle = (
            rowIndex: number,
            columnIndex: number,
        ): CSSProperties => {
            const itemStyleCache = getItemStyleCache.value;
            // since there was no need to introduce an nested array into cache object
            // we use row,column to construct the key for indexing the map.
            const key = `${rowIndex},${columnIndex}`;

            if (itemStyleCache.hasOwnProperty(key)) {
                return itemStyleCache[key];
            } else {
                const left = getLeftPosition(rowIndex);

                const top = getTopPosition(columnIndex);

                itemStyleCache[key] = {
                    position: 'absolute',
                    left: `${left}px`,
                    top: `${top}px`,
                    height: `${cardHeight.value}px`,
                    width: `${cardWidth.value}px`,
                };

                return itemStyleCache[key];
            }
        };

        const renderItems = () => {
            const [columnStart, columnEnd] = unref(columnsToRender);

            const children: VNodeChild[] = [];

            if (totalRow.value > 0 && totalColumn.value > 0) {
                for (let column = columnStart; column <= columnEnd; column++) {
                    for (let row = 0; row < totalRow.value; row++) {
                        const _index = slots.prev
                            ? totalRow.value * column + row - 1
                            : totalRow.value * column + row;

                        children.push(
                            <div
                                key={`${row}:${column}`}
                                style={{ ...getItemStyle(row, column) }}
                            >
                                {slots.prev && row === 0 && column === 0
                                    ? slots.prev()
                                    : props.dataSource[_index] &&
                                      slots.card &&
                                      slots.card(
                                          props.dataSource[_index],
                                          _index,
                                      )}
                            </div>,
                        );
                    }
                }
            } else if (slots.prev) {
                children.push(
                    <div key={`${0}:${0}`} style={{ ...getItemStyle(0, 0) }}>
                        {slots.prev && slots.prev()}
                    </div>,
                );
            }
            return children;
        };

        onMounted(() => {
            loading.value = true;
            // 计算卡片的宽度和高度
            if (windowRef.value) {
                windowWidth.value = windowRef.value.offsetWidth || 0;
                cardHeight.value = itemRef.value.offsetHeight || 0;
                cardWidth.value = Math.ceil(
                    windowWidth.value / totalRow.value - rowSpan,
                );
                loading.value = false;
            }
        });

        return () => (
            <div class={'wrapper'} style={props.bodyStyle}>
                <div
                    class={'window'}
                    style={{
                        position: 'relative',
                        overflowY: 'scroll',
                        WebkitOverflowScrolling: 'touch',
                        willChange: 'transform',
                        height: props.windowHeight
                            ? `${props.windowHeight}px`
                            : '100%',
                        width: '100%',
                    }}
                    onScroll={onScroll}
                    ref={(el) => (windowRef.value = el)}
                >
                    {loading.value ? (
                        <div ref={(el) => (itemRef.value = el)}>
                            {slots.card && slots.card('', 0)}
                            <div style="clear:both; height:0;"></div>
                        </div>
                    ) : props.dataSource.length || slots.prev ? (
                        <div
                            ref={(el) => (innerRef.value = el)}
                            style={{
                                width: '100%',
                                height: `${
                                    totalColumn.value *
                                        (cardHeight.value + columnSpan) -
                                    columnSpan
                                }px`,
                            }}
                        >
                            {renderItems()}
                        </div>
                    ) : (
                        <Empty />
                    )}
                </div>
            </div>
        );
    },
});

export default Scroll;
