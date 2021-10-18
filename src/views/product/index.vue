<template>
  <div :class="getClass">
    <h2>产品</h2>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { useDesign } from '/@/hooks/web/useDesgin'
const props = defineProps()
const { prefixCls } = useDesign('product')

const getClass = computed(() => [
  prefixCls
])

</script>

<style lang="less">
@prefix-cls: ~"@{namespace}-product";
.@{prefix-cls} {
  display: block;
  overflow: hidden;
}
</style>