import type { AppRouteRecordRaw } from '/#/router'

const product: AppRouteRecordRaw = {
  name: 'Product',
  path: '/product',
  component: () => import('@/views/product/index.vue'),
  meta: {
    title: '产品',
    hiddenDack: true,
  }
}

export default product
