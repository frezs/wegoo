<template>
  <slot></slot>
</template>

<script setup lang='ts'>
import { defineProps, toRefs } from 'vue'
import { prefixCls as defaultPrefixCls } from '@/setting/designSetting'
import { createAppProviderContext } from './useAppContext'
// 定义props
const props =  defineProps({
  prefixCls: { type: String, default: defaultPrefixCls}
})

const { prefixCls } = toRefs(props)
// 把class名前缀全局暴
createAppProviderContext({ prefixCls })

</script>