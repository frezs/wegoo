import type { AppRouteMeta } from '/#/router'
import { ref, unref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { REDIRECT_NAME } from '/@/router/routes/constant'
import { isArray } from 'lodash-es'

export function useMeta<T extends keyof AppRouteMeta>(opt: T | Array<T>) {
  const { currentRoute } = useRouter()
  const currentMeta = ref()
  watch(
    () => currentRoute.value.path,
    () => {
      const route = unref(currentRoute)
      if (route.name === REDIRECT_NAME) {
        return
      }
      if (opt && isArray(opt)) {
        currentMeta.value = opt.map(item => {
          return route?.meta?.[item] || false
        }) as unknown as Array<boolean>
      } else {
        currentMeta.value = (route?.meta?.[opt] || false) as unknown as boolean
      }
      console.log(currentMeta.value, opt)
    },
    { immediate: true }
  )
  return unref(currentMeta)
}