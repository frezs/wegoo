import type { AppRouteRecordRaw } from '/#/router'

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
  console.log(key, modules, routeModuleList)
})

// 动态加载路由
export const asyncRoutes = [...routeModuleList];

// 主路由
export const mainRoutes: AppRouteRecordRaw[] = [
  {
    name: 'Classify',
    path: '/classify',
    component: () => import('@/views/dock/Classify.vue'),
    meta: {
      title: '分类',
      isDack: true,
    }
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import('@/views/dock/Cart.vue'),
    meta: {
      title: '购物车',
      isDack: true,
    }
  }, {
    name: 'Me',
    path: '/me',
    component: () => import('@/views/dock/Me.vue'),
    meta: {
      title: '我的',
      isDack: true,
    }
  }
]

// 根路由
export const rootRoutes: AppRouteRecordRaw = {
  name: 'Home',
  path: '/',
  component: () => import('@/views/dock/Home.vue'),
  meta: {
    title: '首页',
  }
}

// 基础路由
export const baseRoutes = [rootRoutes, ...mainRoutes, ...asyncRoutes]