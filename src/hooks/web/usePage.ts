import type { Router, RouteLocationRaw } from 'vue-router'
import { useRouter } from 'vue-router'
import { pageEnum } from '/@/enums/pageEnum'
import { isString } from 'lodash-es'
import { handleError } from '/@/utils/index'
import { unref } from 'vue-demi'


export type RouteLocationRawEx = Omit<RouteLocationRaw, 'path'> & { path: pageEnum }


export function useGo(router: Router = useRouter()) {

  const { push, replace } = router

  function go(opt: pageEnum | RouteLocationRawEx | string = pageEnum.MAIN_PAGE, isReplace = false) {
    if (!opt) return
    if (isString(opt)) {
      isReplace ? replace(opt).catch(handleError) : push(opt).catch(handleError)
    } else {
      // 转换类型
      const o = opt as RouteLocationRaw
      isReplace ? replace(o).catch(handleError) : push(o).catch(handleError)
    }
  }
  return go
}

export function useBack(router: Router = useRouter()) {
  const { back } = router
  return back
}

export function useRedo(router: Router = useRouter()) {
  const { currentRoute, push } = router
  const { query, params } = currentRoute.value

  function redo(): Promise<boolean> {
    return new Promise((reslove) => {
      push({
        path: `/redirect${unref(currentRoute).fullPath}`,
        query,
        params
      }).then(() => reslove(true))
    })
  }

  return redo
}