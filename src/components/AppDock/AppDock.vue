<template>
  <Tabbar
    v-model="active"
    :route="route"
    :active-color="activeColor"
    :inactiveColor="inactiveColor"
  >
    <TabbarItem
      replace
      v-for="(item,index) in dockItems"
      :to="item.path"
      :icon="item.icon"
      :key="index"
    >
      <span>{{ item.title }}</span>
      <template v-if="item.imageActive && item.imageInactive" #icon="props">
        <img :src="props.active ? item.imageActive : item.imageInactive" />
      </template>
    </TabbarItem>
  </Tabbar>
</template>

<script setup lang='ts'>
import type { PropType } from 'vue'
import { defineProps, ref, watch } from 'vue'
import { Tabbar, TabbarItem } from 'vant'

const props = defineProps({
  active: { type: Number, defalut: 0 },
  activeColor: String,
  inactiveColor: String,
  dockItems: Array as PropType<AppDarkItem[]>,
  route: { type: Boolean, defalut: true },
})

const active = ref(props.active)

const emits = defineEmits(['change'])

watch(
  () => active.value,
  (val) => {
    changeEvent(Number(val))
  })

function changeEvent(index: number) {
  const { dockItems } = props
  emits('change', { path: dockItems?.[index].path })
}

</script>

<style lang="less">
</style>