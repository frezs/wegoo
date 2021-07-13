import { useAppProviderContext } from '@/components/Application'


export function useDesign(scoped: string) {

  const value = useAppProviderContext()

  return {
    prefixCls: `${value.prefixCls}-${scoped}`,
    prefixVar: value.prefixCls
  }
}