<template>
  <AppNav v-if="!navigation"></AppNav>
  <slot></slot>
  <AppDock v-if="!isDack" :active="active" :dock-items="docks" @change="change"></AppDock>
</template>

<script setup lang='ts'>
import AppDock from '@/components/AppDock/AppDock.vue'
import AppNav from '@/components/AppNav/AppNav.vue'
import { useMeta } from '/@/hooks/web/useMate'

defineProps({
  active: Number
})

const [navigation, isDack] = useMeta(['navigation', 'isDack'])

const emits = defineEmits(['change'])

function change(val: any) {
  emits('change', val)
  console.log(val)
}

const docks = [
  {
    title: '首页',
    path: '/',
    icon: 'home-o',
  },
  {
    title: '分类',
    path: '/classify',
    icon: 'apps-o',
  }, {
    title: '购物车',
    path: '/cart',
    icon: 'shopping-cart-o',
  }, {
    title: '我的',
    path: '/me',
    icon: 'manager-o',
  }
]

</script>