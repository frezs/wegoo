<template>
  <div :class="getClass"></div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import { useDesign } from '/@/hooks/web/useDesgin'
const props = defineProps()
const { prefixCls } = useDesign('redirect')

const getClass = computed(() => [
  prefixCls
])

</script>

<style lang="less">
@prefix-cls: ~"@{namespace}-redirect";
.@{prefix-cls} {
  display: block;
}
</style>