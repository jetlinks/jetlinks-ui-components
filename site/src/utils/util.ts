export function isZhCN(name: string): boolean {
    return /-cn\/?$/.test(name);
}

export function isLocalStorageNameSupported() {
    const testKey = 'test';
    const storage = window.localStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
}

export function getLocalizedPathname(
    path: string,
    query = {},
    hash?: {
        zhCN: string;
        enUS: string;
    },
): {
    path: string;
    query: Record<string, any>;
} {
    const pathname = path.startsWith('/') ? path : `/${path}`;
    let fullPath;
    if (pathname === '/') {
        fullPath = '/index';
    } else {
        fullPath = `${pathname}`;
    }

    if (hash) {
        const localHash = hash['zhCN'];
        fullPath += `#${localHash}`;
    }
    return { path: fullPath, query };
}
