import { getCommonStoragePrefix, getStorageShortName } from '@/utils/env'


export function initAppConfigStore() {

  // 这里初始化主题，将数据读入store

  // 这里将配置预读到 store

  setTimeout(() => {
    clearObsoleteStorage();
  }, 50);

}


// 清理 localStorage 和 sessionStorage 无用配置
export function clearObsoleteStorage() {
  const commonPrefix = getCommonStoragePrefix();
  const shortPrefix = getStorageShortName();

  [localStorage, sessionStorage].forEach((item: Storage) => {
    Object.keys(item).forEach((key) => {
      if (key && key.startsWith(commonPrefix) && !key.startsWith(shortPrefix)) {
        item.removeItem(key);
      }
    });
  });
}