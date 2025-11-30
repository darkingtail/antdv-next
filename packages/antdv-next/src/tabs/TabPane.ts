import type { TabPaneProps as VcTabPaneProps } from '@v-c/tabs'
import { defineComponent } from 'vue'

export type TabPaneProps = VcTabPaneProps

const TabPane = defineComponent<TabPaneProps>(
  () => {
    return () => null
  },
  {
    name: 'ATabPane',
    inheritAttrs: false,
  },
)

export default TabPane
