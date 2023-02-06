
import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'
import { configProviderContextKey } from './tokens'
import { debugWarn, keysOf } from '../util/scrollbar'

import type { MaybeRef } from '@vueuse/core'
import type { App, Ref } from 'vue'
import type { ConfigProviderContext } from './tokens'

//use-global-config
const globalConfig = ref<ConfigProviderContext>()

export function useGlobalConfig<
    K extends keyof ConfigProviderContext,
    D extends ConfigProviderContext[K]
    >(
    key: K,
    defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>
export function useGlobalConfig(): Ref<ConfigProviderContext>
export function useGlobalConfig(
    key?: keyof ConfigProviderContext,
    defaultValue = undefined
) {
    const config = getCurrentInstance()
        ? inject(configProviderContextKey, globalConfig)
        : globalConfig
    if (key) {
        return computed(() => config.value?.[key] ?? defaultValue)
    } else {
        return config
    }
}

export const provideGlobalConfig = (
    config: MaybeRef<ConfigProviderContext>,
    app?: App,
    global = false
) => {
    const inSetup = !!getCurrentInstance()
    const oldConfig = inSetup ? useGlobalConfig() : undefined

    const provideFn = app?.provide ?? (inSetup ? provide : undefined)
    if (!provideFn) {
        debugWarn(
            'provideGlobalConfig',
            'provideGlobalConfig() can only be used inside setup().'
        )
        return
    }

    const context = computed(() => {
        const cfg = unref(config)
        if (!oldConfig?.value) return cfg
        return mergeConfig(oldConfig.value, cfg)
    })
    provideFn(configProviderContextKey, context)
    if (global || !globalConfig.value) {
        globalConfig.value = context.value
    }
    return context
}

const mergeConfig = (
    a: ConfigProviderContext,
    b: ConfigProviderContext
): ConfigProviderContext => {
    const keys = [...new Set([...keysOf(a), ...keysOf(b)])]
    const obj: Record<string, any> = {}
    for (const key of keys) {
        obj[key] = b[key] ?? a[key]
    }
    return obj
}

//use-namespace
export const defaultNamespace = 'el'
const statePrefix = 'is-'

const _bem = (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
) => {
    let cls = `${namespace}-${block}`
    if (blockSuffix) {
        cls += `-${blockSuffix}`
    }
    if (element) {
        cls += `__${element}`
    }
    if (modifier) {
        cls += `--${modifier}`
    }
    return cls
}

export const useNamespace = (block: string) => {
    const namespace = useGlobalConfig('namespace', defaultNamespace)
    const b = (blockSuffix = '') =>
        _bem(namespace.value, block, blockSuffix, '', '')
    const e = (element?: string) =>
        element ? _bem(namespace.value, block, '', element, '') : ''
    const m = (modifier?: string) =>
        modifier ? _bem(namespace.value, block, '', '', modifier) : ''
    const be = (blockSuffix?: string, element?: string) =>
        blockSuffix && element
            ? _bem(namespace.value, block, blockSuffix, element, '')
            : ''
    const em = (element?: string, modifier?: string) =>
        element && modifier
            ? _bem(namespace.value, block, '', element, modifier)
            : ''
    const bm = (blockSuffix?: string, modifier?: string) =>
        blockSuffix && modifier
            ? _bem(namespace.value, block, blockSuffix, '', modifier)
            : ''
    const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
        blockSuffix && element && modifier
            ? _bem(namespace.value, block, blockSuffix, element, modifier)
            : ''
    const is: {
        (name: string, state: boolean | undefined): string
        (name: string): string
    } = (name: string, ...args: [boolean | undefined] | []) => {
        const state = args.length >= 1 ? args[0]! : true
        return name && state ? `${statePrefix}${name}` : ''
    }

    // for css var
    // --el-xxx: value;
    const cssVar = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace.value}-${key}`] = object[key]
            }
        }
        return styles
    }
    // with block
    const cssVarBlock = (object: Record<string, string>) => {
        const styles: Record<string, string> = {}
        for (const key in object) {
            if (object[key]) {
                styles[`--${namespace.value}-${block}-${key}`] = object[key]
            }
        }
        return styles
    }

    const cssVarName = (name: string) => `--${namespace.value}-${name}`
    const cssVarBlockName = (name: string) =>
        `--${namespace.value}-${block}-${name}`

    return {
        namespace,
        b,
        e,
        m,
        be,
        em,
        bm,
        bem,
        is,
        // css
        cssVar,
        cssVarName,
        cssVarBlock,
        cssVarBlockName,
    }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>