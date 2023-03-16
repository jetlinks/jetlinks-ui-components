export function isZhCN(name) {
    return /-cn\/?$/.test(name);
}
export function isLocalStorageNameSupported() {
    const testKey = 'test';
    const storage = window.localStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    }
    catch (error) {
        return false;
    }
}
export function getLocalizedPathname(path, query = {}, hash) {
    const pathname = path.startsWith('/') ? path : `/${path}`;
    let fullPath;
    if (pathname === '/') {
        fullPath = '/index-cn';
    }
    else if (pathname.endsWith('/')) {
        fullPath = pathname.replace(/\/$/, '-cn/');
    }
    else {
        fullPath = `${pathname}-cn`;
    }
    if (hash) {
        const localHash = hash['zhCN'];
        fullPath += `#${localHash}`;
    }
    return { path: fullPath, query };
}