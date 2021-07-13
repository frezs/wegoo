import { inject, InjectionKey, provide, UnwrapRef } from 'vue'
import { reactive, readonly as defineReadonly } from 'vue'

interface CreateContextOptions {
  readonly?: boolean
  createProvider?: boolean
  native?: boolean
}

type ShallowUnwrap<T> = {
  [P in keyof T]: UnwrapRef<T[P]>
}

export function createContext<T>(
  context: any,
  key: InjectionKey<T> = Symbol(),
  options?: CreateContextOptions
) {
  // 读配置
  const { readonly = true, createProvider = false, native = false } = options || {}
  const state = reactive(context)
  const provideData = readonly ? defineReadonly(state) : state
  // 全局注册
  !createProvider && provide(key, native ? context : provideData)

  return {
    state
  }
}

export function useContext<T>(key: InjectionKey<T>, native?: boolean): T
export function useContext<T>(key: InjectionKey<T>, defaultValue?: any, native?: boolean): T

export function useContext<T>(
  key: InjectionKey<T> = Symbol(),
  defaultValue?: any,
): ShallowUnwrap<T> {
  return inject(key, defaultValue || {})
}