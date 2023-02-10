import { defineComponent, nextTick, onMounted, ref } from "vue";
import vuescroll from 'vuescroll'

const ScrollWrap = defineComponent({
    props: {
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
        }
    },
    emits: ['handleScroll', 'reachBottom'],
    setup(props, {slots, emit}) {
        const scrollContent = ref()
        const vs = ref()

        onMounted(() => {
            const config = { attributes: true, childList: true, subtree: true }

            const observer = new MutationObserver(() => {
                nextTick().then(() => {
                    needGetMore()
                })
            })
            observer.observe(scrollContent.value, config)
        })

        const handleScroll = (vertical, horizontal, nativeEvent) => {
            console.log('2222')
            if (vertical.scrollTop + nativeEvent.target.clientHeight + 5 > nativeEvent.target.scrollHeight) {
                console.log('11111')
                // 触底事件
                emit('reachBottom', nativeEvent)
            }
            // 滚动事件
            emit('handleScroll', nativeEvent)
        }

        const needGetMore = () => {
            setTimeout(() => {
                if (vs.value) {
                    const isScroll = vs.value.$el.className.includes('hasVBar')
                    if (isScroll === false) {
                        emit('reachBottom')
                    }
                }
            }, 100)
        }

        return () => <div style="height: 100%;">
            <vuescroll ref="vs" onHandleScroll={handleScroll} ops={props.ops}>
                <div ref="scrollContent" style="padding-right: 4px;padding-bottom: 24px;">
                    {/* {slots?.default && slots.default()} */}
                </div>
            </vuescroll>
        </div>
    }
})

export default ScrollWrap