import type { RouteRecordRaw, RouteMeta } from 'vue-router'

export { }

// 定义'vue-router'模块变量声明
declare module 'vue-router' {
  // 覆盖 RouteMeta 接口
  interface RouteMeta extends Record<string | number | symbol, unknown> {
    // meta菜单定义项目
  }
}

// meta
export interface AppRouteMeta {
  title?: string,
  isDack?: boolean,
  navigation?: boolean,
}

// router and router children
export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'children' | 'meta'> {
  meta?: AppRouteMeta
  children?: AppRouteRecordRaw[]
}