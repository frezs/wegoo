<template>
  <h2>{{ home }}</h2>
  <h2>{{ store.state.sidebarOpen }}</h2>
  <Button @click="store.dispatch('set')">Store</Button>

  <Swipe :class="prefixCls" :autoplay="3000" indicator-color="white" lazy-render>
    <SwipeItem v-for="image in images" :key="image">
      <img :src="image" />
    </SwipeItem>
  </Swipe>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { getHome } from '@/api/home'
import { useDesign } from '@/hooks/web/useDesgin'
import { Swipe, SwipeItem } from 'vant'

const { prefixCls, prefixVar } = useDesign('home')

console.log(prefixCls, prefixVar)

const home = ref(null)
const store = useStore()

getHome().then(res => {
  home.value = res.data.data[0]
})

const images = [
  'https://img.yzcdn.cn/vant/apple-1.jpg',
  'https://img.yzcdn.cn/vant/apple-2.jpg',
];

</script>

<style lang="less">
@prefix-cls: ~"@{namespace}-home";

.@{prefix-cls} {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>