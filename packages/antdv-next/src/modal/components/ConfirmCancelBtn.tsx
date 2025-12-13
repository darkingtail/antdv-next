import type { VueNode } from '../../_util/type'
import type { ConfirmDialogProps } from '../ConfirmDialog'
import { defineComponent } from 'vue'
import ActionButton from '../../_util/ActionButton'
import { getSlotPropsFnRun } from '../../_util/tools'
import { useModalContext } from '../context'

export interface ConfirmCancelBtnProps
  extends Pick<
    ConfirmDialogProps,
        'cancelButtonProps' | 'isSilent' | 'rootPrefixCls' | 'close' | 'onConfirm' | 'onCancel'
  > {
  autoFocusButton?: false | 'ok' | 'cancel' | null
  cancelTextLocale?: VueNode
  mergedOkCancel?: boolean
  onClose?: () => void
}

const ConfirmCancelBtn = defineComponent(
  () => {
    const context = useModalContext()
    return () => {
      const {
        autoFocusButton,
        cancelButtonProps,
        isSilent,
        mergedOkCancel,
        rootPrefixCls,
        close,
        onCancel,
        onConfirm,
        onClose,
      } = context.value

      const cancelTextLocale = getSlotPropsFnRun({}, context.value, 'cancelTextLocale')
      return mergedOkCancel
        ? (
            <ActionButton
              isSilent={isSilent}
              actionFn={onCancel}
              close={(...args: any[]) => {
                close?.(...args)
                onConfirm?.(false)
                onClose?.()
              }}
              autoFocus={autoFocusButton === 'cancel'}
              buttonProps={cancelButtonProps}
              prefixCls={`${rootPrefixCls}-btn`}
            >
              {cancelTextLocale}
            </ActionButton>
          )
        : null
    }
  },
  {
    name: 'ConfirmCancelBtn',
    inheritAttrs: false,
  },
)

export default ConfirmCancelBtn
