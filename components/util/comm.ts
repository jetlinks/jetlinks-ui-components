import { Slots } from 'vue';

export function getSlot<T>(
    slots: Slots,
    props: Record<string, unknown>,
    prop = 'default',
): T | false {
    if (props[prop] === false) {
        // force not render
        return false;
    }
    return (props[prop] || slots[prop]) as T;
}

export function getSlotVNode<T>(
    slots: Slots,
    props: Record<string, unknown>,
    prop = 'default',
): T | false {
    if (props[prop] === false) {
        return false;
    }
    return (props[prop] || slots[prop]?.()) as T;
}

export const isPromise = (fn: Promise<any> | any) => {
    return !!fn && typeof fn.then === 'function';
};

/**
 * 生成随机数
 * @param length {number} 长度
 * @returns
 */
export const randomString = (length: number = 32) => {
    const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = chars.length;
    let pwd = '';
    for (let i = 0; i < length; i += 1) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
};
