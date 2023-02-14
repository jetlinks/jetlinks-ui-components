import { defineComponent, nextTick, onMounted, ref, watch, watchEffect, computed, unref, getCurrentInstance } from "vue";
import styles from './index.module.less'
import { memoize, isNumber } from 'lodash'

interface ScrollTableProps {
    dataSource: Record<string, any>[];
    total: number;
    cardHeight: number;
    cardWidth: number;
    windowHeight: number;
    // windowWidth: number;
    columnSpan: number;
    rowSpan: number;
    bodyStyle?: Record<string, any>;
}

const ScrollTableProps = defineComponent<ScrollTableProps>({
    props: {
        dataSource: {
            type: Array,
            default: () => []
        },
        total: {
            type: Number,
            default: 0
        },
        cardHeight: { // 卡片的高度
            type: Number,
            default: 100
        },
        cardWidth: { // 卡片的宽度
            type: Number,
            default: 100
        },
        windowHeight: { // 可视高度
            type: Number,
            default: 500
        },
        // windowWidth: { // 可视宽度
        //     type: Number,
        //     default: 1300
        // },
        columnSpan: { // 上下间隔
            type: Number,
            default: 20
        },
        rowSpan: { // 左右间隔
            type: Number,
            default: 20
        },
        bodyStyle: {
          type: Object,
          default: {}
        },
        // style: {
        //     type: [Object, String, Array]
        // }
    } as any,
    emits: ['reachBottom'],
    setup(props: ScrollTableProps, { slots, emit }) {

        const windowRef = ref<HTMLElement>()
        const innerRef = ref<HTMLElement>()

        const windowWidth = ref<number>(0)
        const _scrollTop = ref<number>(0)

        const loading = ref<boolean>(true)

        // 每排展示的卡片数量
        const totalRow = computed(() => Math.floor((windowWidth.value + props.rowSpan) / (props.cardWidth + props.rowSpan)))
        
        // 总共展示的列数
        const totalColumn = computed(() => Math.ceil(props.total / totalRow.value))

        const states = ref({
            isScrolling: false,
            scrollTop: 0,
            updateRequested: false,
            yAxisScrollDir: 'forward'
        })

        const useCache = () => {
            const vm = getCurrentInstance()!
          
            return computed(() => {
              const _getItemStyleCache = (_: any) => ({})
              return memoize(_getItemStyleCache)
            })
        }

        const getItemStyleCache = useCache()

        /**
         * 计算可是区域的列
         */
        const getColumnsStartIndexForOffset = (
            { cardHeight, columnSpan },
            scrollTop: number
          ): number =>
            Math.max(
              0,
              Math.min(totalColumn.value - 1, Math.floor(scrollTop / ((cardHeight + columnSpan) as number)))
        )
        
        const getColumnsStopIndexForStartIndex = (
            { cardHeight, windowHeight, columnSpan },
            startIndex: number,
            scrollTop: number
          ): number => {
            const numVisibleRows = Math.ceil(
              (windowHeight as number) / ((cardHeight + columnSpan) as number)
            )

            return Math.max(
              0, 
              Math.min(
                totalColumn.value - 1,
                startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
              )
            )
        }

        const columnsToRender = computed(() => {
            const { isScrolling, yAxisScrollDir, scrollTop } = unref(states)
    
            if (totalColumn.value === 0 || totalRow.value === 0) {
              return [0, 0, 0, 0]
            }
    
            const startIndex = getColumnsStartIndexForOffset(
              props,
              scrollTop,
            )
            const stopIndex = getColumnsStopIndexForStartIndex(
              props,
              startIndex,
              scrollTop
            )
    
            // const cacheBackward = !isScrolling || yAxisScrollDir === 'backward' ? 2 : 1
            // const cacheForward = !isScrolling || yAxisScrollDir === 'forward' ? 2 : 1
    
            return [
              Math.max(0, startIndex),
              Math.max(0, Math.min(totalColumn.value! - 1, stopIndex)),
              startIndex,
              stopIndex,
            ]
        })

          const emitEvents = () => {
            const {
              isScrolling,
              scrollTop,
              updateRequested,
              yAxisScrollDir,
            } = unref(states)
            if(updateRequested && isScrolling && yAxisScrollDir === 'forward' && scrollTop > 0){
                const t = scrollTop - _scrollTop.value
                if(t > props.cardHeight * 2) {
                    _scrollTop.value = scrollTop
                    emit('reachBottom', scrollTop)
                }
            }
        }

        const getScrollDir = (prev: number, cur: number) => prev < cur ? 'forward' : 'backward'

        const resetIsScrolling = () => {
            states.value.isScrolling = false
            nextTick(() => {
              getItemStyleCache.value(-1, null, null)
            })
        }

        const onUpdated = () => {
            const { scrollLeft, scrollTop, updateRequested } = unref(states)
    
            const windowElement = unref(windowRef)
            if (updateRequested && windowElement) {
                windowElement.scrollLeft = Math.max(0, scrollLeft)
                windowElement.scrollTop = Math.max(0, scrollTop)
            }
        }

        const onScroll = (e: Event) => {
            const {
              clientHeight,
              clientWidth,
              scrollHeight,
              scrollTop,
              scrollWidth,
            } = e.currentTarget as HTMLElement
    
            const _states = unref(states)
    
            if (
              _states.scrollTop === scrollTop
            ) {
              return
            }
    
            const _scrollTop = Math.max(
                0,
                Math.min(scrollTop, scrollHeight - clientHeight)
            )
            states.value = {
              ..._states,
              isScrolling: true,
              scrollTop: _scrollTop,
              updateRequested: true,
              yAxisScrollDir: getScrollDir(_states.scrollTop, scrollTop),
            }

            nextTick(() => resetIsScrolling())
    
            onUpdated()
            emitEvents()
        }

        const getTopPosition = ({ cardHeight, columnSpan }, index) => index * ((cardHeight + columnSpan) as number)

        const getLeftPosition = ({ cardWidth, rowSpan }, index) => index * ((cardWidth + rowSpan) as number)

        const getItemStyle = (
            rowIndex: number,
            columnIndex: number
          ): CSSProperties => {
            const { cardHeight } = props
            const itemStyleCache = getItemStyleCache.value
            // since there was no need to introduce an nested array into cache object
            // we use row,column to construct the key for indexing the map.
            const key = `${rowIndex},${columnIndex}`
    
            if (itemStyleCache.hasOwnProperty(key)) {
              return itemStyleCache[key]
            } else {
              const left = getLeftPosition(props, rowIndex)

              console.log(left)
    
              const top = getTopPosition(props, columnIndex)
    
              itemStyleCache[key] = {
                position: 'absolute',
                left: `${left}px`,
                top: `${top}px`,
                height: `${props.cardHeight}px`,
                width: `${props.cardWidth}px`,
              }
    
              return itemStyleCache[key]
            }
        }

        const renderItems = () => {
            const [columnStart, columnEnd] = unref(columnsToRender)

            const children: VNodeChild[] = []
            
            if (totalRow.value > 0 && totalColumn.value > 0) {
                for (let column = columnStart; column <= columnEnd; column++) {
                    for (let row = 0; row < totalRow.value; row++) {
                        const _index = slots.prev ? totalRow.value*column + row - 1  : totalRow.value*column + row
                        
                        children.push(
                            <div key={`${row}:${column}`} style={{...getItemStyle(row, column)}}>
                                {slots.prev && row === 0 && column === 0 ? slots.prev() : (props.dataSource[_index] && slots.card && slots.card(props.dataSource[_index], _index))}
                            </div>
                        )
                    }
                }
            }
            return children
        }

        watchEffect(() => {
          // slots.card
            if(innerRef.value){
                windowWidth.value = innerRef.value.offsetWidth || 0
            }
        })

        onMounted(() => {
          loading.value = true
          // 计算卡片的宽度和高度
          console.log(props.cardWidth)
        })

        return () => <div class={styles['wrapper']} style={props.bodyStyle}>
            <div 
                class={styles['window']} 
                style={{
                    position: 'relative',
                    overflowY: 'scroll',
                    WebkitOverflowScrolling: 'touch',
                    willChange: 'transform',
                    height: props.windowHeight ? `${props.windowHeight}px` : '100%',
                    width: '100%',
                }} 
                onScroll={onScroll} 
                ref={el => windowRef.value = el}
            >
              {
                loading.value ? 
                (slots.card && slots.card('', 0)) :
                <div ref={el => innerRef.value = el} style={{width: '100%', height: `${totalColumn.value * (props.cardHeight + props.columnSpan) - props.columnSpan}px`}}>
                  {renderItems()}
                </div>
              }
            </div>
        </div>
    }
})

export default ScrollTableProps