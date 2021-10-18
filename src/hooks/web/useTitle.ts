import { ref, unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useTitle as usePageTitle } from '@vueuse/core'
import { useGlobSetting } from '/@/hooks/setting'
import { REDIRECT_NAME } from '/@/router/routes/constant'

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
      if (route.name === REDIRECT_NAME) {
        return
      }
      // 设置页面标题
      const pTitle = route?.meta?.title
      pageTitle.value = pTitle ? `${pTitle} - ${title}` : title
    },
    { immediate: true }
  )
}

export function getTitle() {
  const { currentRoute } = useRouter()
  const currentTitle = ref<string | undefined>(undefined)
  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      if (route.name === REDIRECT_NAME) {
        return
      }
      currentTitle.value = route?.meta?.title as string
    },
    { immediate: true }
  )
  return currentTitle
}

export function setTitle(val: string) {
  // 获取当前页标题
  const pageTitle = usePageTitle()
  // 设置新标题
  pageTitle.value = `${pageTitle.value}${val}`
}