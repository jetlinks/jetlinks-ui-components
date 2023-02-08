import type { ConfigProviderProps } from '@element-plus/components/config-provider'
import type { InjectionKey, Ref } from 'vue'

export interface ScrollbarContext {
    scrollbarElement: HTMLDivElement
    wrapElement: HTMLDivElement
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol(
    'scrollbarContextKey'
)
export type ConfigProviderContext = Partial<ConfigProviderProps>

export const configProviderContextKey: InjectionKey<
    Ref<ConfigProviderContext>
    > = Symbol()