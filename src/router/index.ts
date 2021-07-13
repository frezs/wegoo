import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/dock/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    name: 'Classfly',
    path: '/classfly',
    component: () => import('@/views/dock/Classfly.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    name: 'Cart',
    path: '/cart',
    component: () => import('@/views/dock/Cart.vue'),
    meta: {
      title: '购物车'
    }
  }, {
    name: 'Me',
    path: '/me',
    component: () => import('@/views/dock/Me.vue'),
    meta: {
      title: '我的'
    }
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: mainRoutes
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}