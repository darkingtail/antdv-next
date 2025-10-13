import type { App } from 'vue'
import { classNames } from '@v-c/util'
import { computed, defineComponent } from 'vue'
import { useConfig } from '../config-provider/context.ts'
import useStyle from './style'

export interface AffixProps {
  prefixCls?: string
  rootClassName?: string
}

const affixDefaultProps: AffixProps = {

}

export const Affix = defineComponent<AffixProps>(
  (props = affixDefaultProps, { slots, attrs }) => {
    const configContext = useConfig()
    const affixPrefixCls = computed(() => configContext.value?.getPrefixCls('affix', props.prefixCls))
    const [wrapCSSVar, hashId, cssVarCls] = useStyle(affixPrefixCls.value)
    return () => {
      const {
        rootClassName,
      } = props
      const rootCls = classNames(rootClassName, hashId, affixPrefixCls.value, cssVarCls)

      return wrapCSSVar(
        <div style={attrs.style as any} class={[rootCls]}>
          <div>
            {slots?.default?.()}
          </div>
        </div>,
      )
    }
  },
  {
    name: 'AAffix',
    inheritAttrs: false,
  },
)

;(Affix as any).install = (app: App) => {
  app.component('AAffix', Affix)
}
export default Affix
