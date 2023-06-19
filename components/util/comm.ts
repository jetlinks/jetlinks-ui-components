import {Slots} from "vue";

export function getSlot<T>(slots: Slots, props: Record<string, unknown>, prop = 'default'): T | false {
    if (props[prop] === false) {
        // force not render
        return false;
    }
    return (props[prop] || slots[prop]) as T;
}

export function getSlotVNode<T>(slots: Slots, props: Record<string, unknown>, prop = 'default'): T | false {
    if (props[prop] === false) {
        return false;
    }
    return (props[prop] || slots[prop]?.()) as T;
}

export const isPromise = (fn: Promise<any> | any) => {
    return !!fn && typeof fn.then === 'function'
}