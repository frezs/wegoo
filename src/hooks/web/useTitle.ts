import { unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTitle as usePageTitle } from '@vueuse/core'
import { useGlobSetting } from '@/hooks/setting'

export function useTitle() {

  // 获取全局变量
  const { title } = useGlobSetting()
  // 创建响应
  const pageTitle = usePageTitle()
  // 获取路由
  const { currentRoute } = useRouter()
  // 检测到路由变化
  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      // 判断是否是排除路由外
      if (route.name === '') {
        return
      }
      // 设置页面标题
      const pTitle = route?.meta?.title
      pageTitle.value = pTitle ? `${pTitle} - ${title}` : title
    },
    { immediate: true }
  )
}