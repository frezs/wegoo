<template>
  <ConfigProvider>
    <AppProvider>
      <Layout>
        <RouterView />
      </Layout>
    </AppProvider>
  </ConfigProvider>
</template>

<script setup lang='ts'>
import { ConfigProvider } from 'vant'
import { AppProvider } from '@/components/Application'
import { useTitle } from './hooks/web/useTitle'
import Layout from '@/layouts/index.vue'

useTitle()

</script>