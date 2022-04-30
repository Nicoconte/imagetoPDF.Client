const StorageService = {
    get: (key) => {
        return localStorage?.getItem(key) ?? null;
    },
    set: (key, value) => {
        localStorage.setItem(key, value);
    },
    exists: (key) => {
        return localStorage?.getItem(key) != null;
    },
    remove: (key) => {
        localStorage.removeItem(key);
    },
    removeAll: () => {
        localStorage.clear();
    }
}

export default StorageService;