import type { VueNode } from '../../_util/type.ts'
import type { ModalEmits, ModalProps } from '../interface.ts'
import { defineComponent } from 'vue'
import { getSlotPropsFnRun } from '../../_util/tools.ts'
import Button, { convertLegacyProps } from '../../button'
import { useModalContext } from '../context.ts'

export interface NormalOkBtnProps
  extends Pick<ModalProps, 'confirmLoading' | 'okButtonProps' | 'okType'> {
  okTextLocale?: VueNode
  onOk?: ModalEmits['ok']
}

const NormalOkBtn = defineComponent(
  () => {
    const context = useModalContext()
    return () => {
      const { okType, confirmLoading, okButtonProps, onOk } = context.value
      const okTextLocale = getSlotPropsFnRun({}, {
        okTextLocale: context.value.okTextLocale,
      }, 'okTextLocale')
      return (
        <Button
          {...convertLegacyProps(okType)}
          loading={confirmLoading}
          onClick={onOk}
          {...okButtonProps}
        >
          {okTextLocale}
        </Button>
      )
    }
  },
  {
    name: 'NormalOkBtn',
    inheritAttrs: false,
  },
)

export default NormalOkBtn
