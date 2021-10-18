import type { AppRouteRecordRaw } from '/#/router'

export const REDIRECT_NAME = 'Redirect'

// 登录
export const LoginRoute: AppRouteRecordRaw = {
  name: 'Login',
  path: '/login',
  //component: () => import(),
  meta: {
    title: 'Login',
  },
}

// 重定向
export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/redirect',
  //component: () => import(),
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      //component: () => (),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

// 没找到
export const NOT_FIND_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/404',
  //component: LAYOUT,
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      name: REDIRECT_NAME,
      path: '/:path(.*)*',
      //component: () => import(),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

//  错误
export const ERROR_ROUTE: AppRouteRecordRaw = {
  name: REDIRECT_NAME,
  path: '/error',
  //component: LAYOUT
  meta: {
    title: REDIRECT_NAME,
  },
  children: [
    {
      name: REDIRECT_NAME,
      path: '/error/:path(.*)*',
      //component: () => import(),
      meta: {
        title: REDIRECT_NAME,
      },
    },
  ],
}

export const BaseRoutes = [LoginRoute, REDIRECT_ROUTE]
