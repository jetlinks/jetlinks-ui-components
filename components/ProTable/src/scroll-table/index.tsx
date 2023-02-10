import { Spin } from "ant-design-vue";
import { defineComponent, nextTick, ref, watch, watchEffect } from "vue";
import ScrollWrap from './ScrollWrap.vue';
import style from './index.module.less'

interface ScrollTableProps {
    dataSource: Record<string, any>[];
    total: number;
    loading: boolean;
    ops?: Record<string, any>;
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
        loading: {
            type: Boolean,
            default: false
        },
        ops: {
            type: Object,
            default: () => {
                return {
                    scrollPanel: {
                        scrollingX: false
                    },
                    bar: {
                        background: '#e9ebed',
                        size: '4px'
                    }
                }
            }
        },
    } as any,
    emits: ['reachBottom'],
    setup(props: ScrollTableProps, {slots, emit}) {

        const gridStyle = ref({})
        const edgeItem = ref([])

        const reachBottom = (e: Event) => {
            emit('reachBottom', e)
        }

        watchEffect(() => {
            console.log(props.dataSource, props)
        })

        watch(
            () => props.dataSource,
            (newVal) => {
                if (newVal.length) {
                  nextTick().then(() => {
                    if (!edgeItem.value || !edgeItem.value[0]) {
                      return
                    }
                    gridStyle.value = {
                      gridTemplateColumns: `repeat(auto-fill, ${edgeItem.value[0]?.getBoundingClientRect().width}px)`
                    }
                  })
                } else {
                  nextTick().then(() => {
                    gridStyle.value = {}
                  })
                }
            },
            { deep: true, immediate: true }
        )

        return () => {
            return <div>
                <div style="display: flex; justify-content: center">
                    <Spin size="large"spinning={props.loading} />
                </div>
                {
                    !props.loading && <ScrollWrap 
                        onReachBottom={reachBottom} 
                        handleScroll={() => {}}
                        list={props.dataSource} 
                        more={props.total > props.dataSource.length}
                        ref="sw" 
                        ops={props.ops}
                    >
                        <div style={{ ...gridStyle }} class={style["flex-list-wrapper"]}>
                            {
                                slots.prev && <div class={style["item-wrap"]}>
                                    {slots.prev()}
                                </div>
                            }
                            {
                                props.dataSource.map((item, index) => (
                                    <div key={index} class={style["item-wrap"]}>
                                        <div ref="edgeItem">
                                            {slots.card && slots.card(item, index)}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </ScrollWrap>
                }
            </div>
        }
    }
})

export default ScrollTableProps