import { Spin } from "ant-design-vue";
import { defineComponent, nextTick, onMounted, ref, watch, watchEffect } from "vue";
// import ScrollWrap from './ScrollWrap.vue';
import style from './index.module.less'
import vueScroll from 'vuescroll'

interface ScrollTableProps {
    dataSource: Record<string, any>[];
    total: number;
    loading: boolean;
    ops?: Record<string, any>;
    width: string;
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
        width: {
            type: String,
            default: '100%'
        }
    } as any,
    emits: ['reachBottom'],
    components: { vueScroll },
    setup(props: ScrollTableProps, { slots, emit }) {

        const gridStyle = ref({})
        const edgeItem = ref([])
        const scrollContent = ref()
        const vs = ref<HTMLDivElement>()

        const needGetMore = () => {
            console.log(vs.value)
            setTimeout(() => {
                if (vs.value) {
                    const isScroll = vs.value.$el.className.includes('hasVBar')
                    if (isScroll === false) {
                        emit('reachBottom')
                    }
                }
            }, 100)
        }

        watchEffect(() => {
            console.log(scrollContent.value)
            if (scrollContent.value) {
                const config = { attributes: true, childList: true, subtree: true }
                const observer = new MutationObserver(() => {
                    nextTick().then(() => {
                        needGetMore()
                    })
                })
                observer.observe(scrollContent.value, config)
            }
        })


        const handleScroll = (vertical, horizontal, nativeEvent) => {
            // console.log(11111)
            if (vertical.scrollTop + nativeEvent.target.clientHeight + 5 > nativeEvent.target.scrollHeight) {
                // 触底事件
                emit('reachBottom', nativeEvent)
            }
            // 滚动事件
            // emit('handleScroll', nativeEvent)
        }

        watchEffect(() => {
            console.log(vs.value, vueScroll)
            if(vs.value){
                console.log(vs.value.handleScroll)
            }
        })

        watch(
            () => props.dataSource,
            async (newVal) => {
                // console.log(newVal)
                if (newVal.length) {
                    await nextTick()
                    if (!edgeItem.value || !edgeItem.value[0]) {
                        return
                    }
                    gridStyle.value = {
                        gridTemplateColumns: `repeat(auto-fill, ${edgeItem.value[0]?.getBoundingClientRect().width}px)`
                    }
                } else {
                    await nextTick()
                    gridStyle.value = {}
                }
            },
            { deep: true, immediate: true }
        )

        const scrollToTop = (delay = 10) => {
            vs.value.scrollTo(
                {
                    y: '0%'
                },
                delay
            )
        }
        const scrollIntoView = (id, time = 300) => {
            vs.value.scrollIntoView(id, time)
        }

        return () => <div>
            <div style="display: flex; justify-content: center">
                    <Spin size="large" spinning={props.loading} />
                </div>
                {
                    !props.loading &&
                        <div class={style["scroll-wrap"]}>
                            <vueScroll
                                ref={(el) => vs.value = el}
                                onHandleScroll={(e) => {
                                    console.log(e)
                                }}
                                ops={props.ops}
                                onHandleScrollComplete={() => {
                                    console.log('scroll complete！')
                                }}
                                onHandleResize={() => {
                                    console.log('content has resized!')
                                }}
                            >
                                <div ref={el => scrollContent.value = el} class={style["scroll-content"]}>
                                    <div style={{ width: props.width, ...gridStyle }} class={style["flex-list-wrapper"]}>
                                        {
                                            slots.prev && <div class={style["item-wrap"]}>
                                                {slots.prev()}
                                            </div>
                                        }
                                        {
                                            props.dataSource.map((item, index) => (
                                                <div key={index} class={style["item-wrap"]}>
                                                    <div ref={el => edgeItem.value.push(el)}>
                                                        {slots.card && slots.card(item, index)}
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </vueScroll>
                        </div>
                }
        </div>
    }
})

export default ScrollTableProps