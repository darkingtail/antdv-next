import type { VueNode } from '../../_util/type.ts'
import type { ConfirmDialogProps } from '../ConfirmDialog.tsx'
import { defineComponent } from 'vue'
import ActionButton from '../../_util/ActionButton.tsx'
import { getSlotPropsFnRun } from '../../_util/tools.ts'
import { useModalContext } from '../context.ts'

export interface ConfirmOkBtnProps
  extends Pick<
    ConfirmDialogProps,
        'close' | 'isSilent' | 'okType' | 'okButtonProps' | 'rootPrefixCls' | 'onConfirm' | 'onOk'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null
  okTextLocale?: VueNode
  onClose?: () => void
}

const ConfirmOkBtn = defineComponent(
  () => {
    const context = useModalContext()
    return () => {
      const {
        autoFocusButton,
        close,
        isSilent,
        okButtonProps,
        rootPrefixCls,
        okType,
        onConfirm,
        onOk,
        onClose,
      } = context.value
      const okTextLocale = getSlotPropsFnRun({}, context.value, 'okTextLocale')
      return (
        <ActionButton
          isSilent={isSilent}
          type={okType || 'primary'}
          actionFn={onOk}
          close={(...args: any[]) => {
            close?.(...args)
            onConfirm?.(true)
            onClose?.()
          }}
          autoFocus={autoFocusButton === 'ok'}
          buttonProps={okButtonProps}
          prefixCls={`${rootPrefixCls}-btn`}
        >
          {okTextLocale}
        </ActionButton>
      )
    }
  },
  {
    name: 'ConfirmOkBtn',
    inheritAttrs: false,
  },
)

export default ConfirmOkBtn
