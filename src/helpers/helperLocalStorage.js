export const localStorageHelper = {
  getKey: pageName => `currentDate_${pageName}`,
  getData: pageName => {
    const key = localStorageHelper.getKey(pageName);
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  },
  setData: (pageName, data) => {
    const key = localStorageHelper.getKey(pageName);
    localStorage.setItem(key, JSON.stringify(data));
  },
};
