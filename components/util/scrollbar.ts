import type { CSSProperties , PropType } from 'vue'
import type { ThumbProps } from '../Scrollbar/thumbUtil'
export { isBoolean, isNumber } from '@vueuse/core'
import { isBoolean, isNumber } from '@vueuse/core'
// import {process} from '@types/node'
import {
    isArray,
    isFunction,
    isObject,
    isString,
    isDate,
    isPromise,
    isSymbol,
} from '@vue/shared'

export {
    isArray,
    isFunction,
    isObject,
    isString,
    isDate,
    isPromise,
    isSymbol,
} from '@vue/shared'


// import { get, set } from 'lodash-unified'
import type { Entries } from 'type-fest'

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
export const entriesOf = <T>(arr: T) => Object.entries(arr) as Entries<T>
export { hasOwn } from '@vue/shared'

export const GAP = 4 // top 2 + bottom 2 of bar instance

export const BAR_MAP = {
    vertical: {
        offset: 'offsetHeight',
        scroll: 'scrollTop',
        scrollSize: 'scrollHeight',
        size: 'height',
        key: 'vertical',
        axis: 'Y',
        client: 'clientY',
        direction: 'top',
    },
    horizontal: {
        offset: 'offsetWidth',
        scroll: 'scrollLeft',
        scrollSize: 'scrollWidth',
        size: 'width',
        key: 'horizontal',
        axis: 'X',
        client: 'clientX',
        direction: 'left',
    },
} as const

export const renderThumbStyle = ({
                                     move,
                                     size,
                                     bar,
                                 }: Pick<ThumbProps, 'move' | 'size'> & {
    bar: typeof BAR_MAP[keyof typeof BAR_MAP]
}): CSSProperties => ({
    [bar.size]: size,
    transform: `translate${bar.axis}(${move}%)`,
})


class ElementPlusError extends Error {
    constructor(m: string) {
        super(m)
        this.name = 'ElementPlusError'
    }
}

export function throwError(scope: string, m: string): never {
    throw new ElementPlusError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
    if (process.env.NODE_ENV !== 'production') {
        const error: Error = isString(scope)
            ? new ElementPlusError(`[${scope}] ${message}`)
            : scope
        // eslint-disable-next-line no-console
        console.warn(error)
    }
}

export const definePropType = <T>(val: any): PropType<T> => val
export const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
        return false
    }
    return !Number.isNaN(Number(val))
}
const SCOPE = 'utils/dom/style'
export function addUnit(value?: string | number, defaultUnit = 'px') {
    if (!value) return ''
    if (isNumber(value) || isStringNumber(value)) {
        return `${value}${defaultUnit}`
    } else if (isString(value)) {
        return value
    }
    debugWarn(SCOPE, 'binding value must be a string or number')
}