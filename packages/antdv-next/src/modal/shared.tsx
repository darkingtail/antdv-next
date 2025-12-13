import type { VueNode } from '../_util/type.ts'
import { CloseOutlined } from '@antdv-next/icons'
import { getSlotPropsFnRun } from '../_util/tools.ts'

export function renderCloseIcon(prefixCls: string, closeIcon?: VueNode) {
  closeIcon = getSlotPropsFnRun({}, { closeIcon }, 'closeIcon')

  return (
    <div class={`${prefixCls}-close-x`}>
      {closeIcon || <CloseOutlined class={`${prefixCls}-close-icon`} />}
    </div>
  )
}
