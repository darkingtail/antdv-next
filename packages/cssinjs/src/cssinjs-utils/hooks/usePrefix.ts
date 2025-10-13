import type { Ref } from 'vue'

export type UsePrefix = () => Ref<{
  rootPrefixCls: string
  iconPrefixCls: string
}>
