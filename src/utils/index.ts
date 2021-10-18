import type { App } from 'vue'

import { isObject } from 'lodash-es'

// 深合并对象
export function objectDeepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? objectDeepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}

// 组件注册为插件
export const withInstall = <T>(component: T, alias?: string) => {
  const comp = component as any;
  comp.install = (app: App) => {
    app.component(comp.name || comp.displayName, component);
    if (alias) {
      app.config.globalProperties[alias] = component;
    }
  };
  return component as T & Plugin;
};

// 错误处理
export const handleError = (e: Error) => console.error(e)