import type { SlotsType } from 'vue'
import type { ModalEmits, ModalProps, ModalSlots, MousePosition } from './interface'
import { CloseOutlined } from '@antdv-next/icons'
import { clsx } from '@v-c/util'
import { computed, defineComponent } from 'vue'
import { useMergedMask } from '../_util/hooks'
import useClosable, { pickClosable } from '../_util/hooks/useClosable.tsx'
import { canUseDocElement } from '../_util/styleChecker'
import { toPropsRefs } from '../_util/tools'
import { devUseWarning, isDev } from '../_util/warning'
import { useBaseConfig, useComponentBaseConfig } from '../config-provider/context'
import useCSSVarCls from '../config-provider/hooks/useCSSVarCls'
import { renderCloseIcon } from './shared.tsx'
import useStyle from './style'

let mousePosition: MousePosition

// ref: https://github.com/ant-design/ant-design/issues/15795
function getClickPosition(e: MouseEvent) {
  mousePosition = {
    x: e.pageX,
    y: e.pageY,
  }
  // 100ms 内发生过点击事件，则从点击位置动画展示
  // 否则直接 zoom 展示
  // 这样可以兼容非点击方式展开
  setTimeout(() => {
    mousePosition = null
  }, 100)
}

// 只有点击事件支持从鼠标位置动画展开
if (canUseDocElement()) {
  document.documentElement.addEventListener('click', getClickPosition, true)
}

const defaults = {
  focusTriggerAfterClose: true,
  width: 520,
} as any

const Modal = defineComponent<
  ModalProps,
  ModalEmits,
  string,
  SlotsType<ModalSlots>
>(
  (props = defaults, { slots, attrs, expose, emit }) => {
    const {
      getPopupContainer: getContextPopupContainer,
      getPrefixCls,
      prefixCls,
      direction,
      class: contextClassName,
      style: contextStyle,
      classes: contextClassNames,
      styles: contextStyles,
      centered: contextCentered,
      cancelButtonProps: contextCancelButtonProps,
      okButtonProps: contextOkButtonProps,
      mask: contextMask,
    } = useComponentBaseConfig('modal', props, [
      'centered',
      'cancelButtonProps',
      'okButtonProps',
      'mask',
    ])

    const {
      mask: modalMask,
    } = toPropsRefs(props, 'mask')
    const { modal: modalContext } = useBaseConfig()
    const rootPrefixCls = computed(() => getPrefixCls())
    const closableContext = computed(() => {
      const { closable } = props
      if (typeof closable === 'boolean') {
        return [undefined, undefined]
      }
      return [closable?.afterClose, closable?.onClose]
    })

    const [mergedMask, maskBlurClassName] = useMergedMask(modalMask, contextMask, prefixCls)

    const handleCancel = (e: MouseEvent) => {
      if (props.confirmLoading) {
        return
      }
      emit('cancel', e)
      emit('close')
    }

    const handleOk = (e: MouseEvent) => {
      emit('ok', e)
      emit('close')
    }

    if (isDev) {
      const warning = devUseWarning('Modal');

      [
        ['bodyStyle', 'styles.body'],
        ['maskStyle', 'styles.mask'],
        ['destroyOnClose', 'destroyOnHidden'],
      ].forEach(([deprecatedName, newName]) => {
        warning.deprecated(!((props as any)[deprecatedName!]), deprecatedName!, newName!)
      })
    }

    // Style
    const rootCls = useCSSVarCls(prefixCls)
    const [hashId, cssVarCls] = useStyle(prefixCls, rootCls)

    const closableIconContext = useClosable(
      pickClosable(computed(() => props)) as any,
      pickClosable(modalContext as any) as any,
      computed(() => {
        return {
          closable: true,
          closeIcon: <CloseOutlined class={`${prefixCls.value}-close-icon`} />,
          closeIconRender: icon => renderCloseIcon(prefixCls.value, icon as any),
        }
      }),
    )
    return () => {
      const {
        wrapClassName,
        centered,
      } = props
      const wrapClassNameExtended = clsx(wrapClassName, {
        [`${prefixCls.value}-centered`]: centered ?? contextCentered.value,
        [`${prefixCls.value}-wrap-rtl`]: direction.value === 'rtl',
      })
      const [rawClosable, mergedCloseIcon, closeBtnIsDisabled, ariaProps] = closableIconContext.value as any
      const [closableAfterclose, onClose] = closableContext.value

      const mergedClosable = rawClosable
        ? {
            disabled: closeBtnIsDisabled,
            closeIcon: mergedCloseIcon,
            afterClose: closableAfterclose,
            ...ariaProps,
          }
        : false
      return null
    }
  },
  {
    name: 'AModal',
    inheritAttrs: false,
  },
)

export default Modal
