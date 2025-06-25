export const localStorageService = {
  getItem: <T>(key: string): T | null => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error("Error getting localStorage item:", error);
      return null;
    }
  },

  setItem: <T>(key: string, value: T): void => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error setting localStorage item:", error);
    }
  },

  removeItem: (key: string): void => {
    window.localStorage.removeItem(key);
  },

  clear: (): void => {
    window.localStorage.clear();
  },
};
