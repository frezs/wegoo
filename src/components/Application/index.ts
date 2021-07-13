import { withInstall } from '@/utils'

import appProvider from './AppProvider.vue'


export { useAppProviderContext } from './useAppContext'


export const AppProvider = withInstall(appProvider)
