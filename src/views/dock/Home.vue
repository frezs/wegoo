<template>
  <h2>{{ home }}</h2>
  <h2>{{ store.state.sidebarOpen }}</h2>
  <Button @click="store.dispatch('set')">Store</Button>
  <Layout :active="0"></Layout>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getHome } from '@/api/home'
import { useDesign } from '@/hooks/web/useDesgin'
import Layout from '@/layouts/index.vue'



const { prefixCls, prefixVar } = useDesign('home')

console.log(prefixCls, prefixVar)

const home = ref(null)
const store = useStore()

getHome().then(res => {
  home.value = res.data.data[0]
})

</script>