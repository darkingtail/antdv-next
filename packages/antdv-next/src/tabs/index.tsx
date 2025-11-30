import type { GetIndicatorSize, MoreProps, Tab, TabsProps as VcTabsProps } from '@v-c/tabs'
import type { SemanticClassNames, SemanticClassNamesType, SemanticStyles, SemanticStylesType } from '../_util/hooks'
import type { VueNode } from '../_util/type.ts'
import type { ComponentBaseProps } from '../config-provider/context.ts'
import type { SizeType } from '../config-provider/SizeContext.tsx'

export type TabsType = 'line' | 'card' | 'editable-card'

export type TabPosition = 'top' | 'right' | 'bottom' | 'left'

export type TabPlacement = 'top' | 'end' | 'bottom' | 'start'

export type TabsSemanticName = 'root' | 'item' | 'indicator' | 'content' | 'header'

type PopupSemantic = 'root'

export type TabsClassNamesType = SemanticClassNamesType<
  TabsProps,
  TabsSemanticName,
  { popup?: SemanticClassNames<PopupSemantic> }
>

export type TabsStylesType = SemanticStylesType<
  TabsProps,
  TabsSemanticName,
  { popup?: SemanticStyles<PopupSemantic> }
>

export interface TabsRef {
  nativeElement: any
}
export interface BaseTabsProps extends ComponentBaseProps {
  type?: TabsType
  size?: SizeType
  hideAdd?: boolean
  centered?: boolean
  classes?: TabsClassNamesType
  styles?: TabsStylesType
  /** @deprecated please use `tabPlacement` instead */
  tabPosition?: TabPosition
  tabPlacement?: TabPlacement
  /** @deprecated Please use `indicator={{ size: ... }}` instead */
  indicatorSize?: GetIndicatorSize
  items?: Tab[]
}

export interface TabsEmits {
  edit: (e: MouseEvent | KeyboardEvent | string, action: 'add' | 'remove') => void
  change: NonNullable<VcTabsProps['onChange']>
  tabClick: NonNullable<VcTabsProps['onTabClick']>
  tabScroll: NonNullable<VcTabsProps['onTabScroll']>
  [key: string]: (...args: any[]) => void
}

export interface TabsProps extends BaseTabsProps, Omit<VcTabsProps, 'editable' | 'items' | 'classNames' | 'className' | 'popupClassName' | 'styles' | 'style' | 'onChange' | 'onTabScroll' | 'onTabClick'> {
  addIcon?: VueNode
  moreIcon?: VueNode
  more?: MoreProps
  removeIcon?: VueNode
  styles?: TabsStylesType
  classNames?: TabsClassNamesType
  /** @deprecated Please use `classNames.popup` instead */
  popupClassName?: string
}

export interface TabsSlots {
  default: () => any
  addIcon: () => any
  moreIcon: () => any
  removeIcon: () => any
}
