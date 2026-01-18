<script setup lang="ts">
import en from 'antdv-next/locale/en_US'
import cn from 'antdv-next/locale/zh_CN'
import dayjs from 'dayjs'
import { storeToRefs } from 'pinia'
import { shallowRef, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'

const appStore = useAppStore()
const { locale } = storeToRefs(appStore)

const antdLocale = shallowRef(cn)
watch(
  locale,
  () => {
    antdLocale.value = locale.value === 'zh-CN' ? cn : en
    dayjs.locale(locale.value === 'zh-CN' ? 'zh-cn' : 'en')
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <a-config-provider :locale="antdLocale">
    <a-app>
      <slot />
    </a-app>
  </a-config-provider>
</template>
