import type { SlotsType } from 'vue'
import type { EmptyEmit } from '../_util/type.ts'
import type { TimelineProps, TimelineSlots } from './Timeline.tsx'
import type { TimelineItemProps, TimelineItemPropsKey } from './TimelineItem.tsx'
import { LoadingOutlined } from '@antdv-next/icons'
import { classNames } from '@v-c/util'
import { omit } from 'es-toolkit'
import { defineComponent } from 'vue'
import { getSlotPropsFnRun } from '../_util/tools.ts'
import { checkRenderNode } from '../_util/vueNode.ts'
import TimelineItem from './TimelineItem.tsx'

export interface TimelineItemListProps extends TimelineProps {
  hashId: string
  direction?: string
}

const TimelineItemList = defineComponent<
  TimelineItemListProps,
  EmptyEmit,
  string,
  SlotsType<TimelineSlots>
>(
  (props, { slots, attrs }) => {
    const getPositionCls = (position: string, idx: number) => {
      const { mode, prefixCls } = props
      if (mode === 'alternate') {
        if (position === 'right') {
          return `${prefixCls}-item-right`
        }
        if (position === 'left') {
          return `${prefixCls}-item-left`
        }
        return idx % 2 === 0 ? `${prefixCls}-item-left` : `${prefixCls}-item-right`
      }
      if (mode === 'left') {
        return `${prefixCls}-item-left`
      }
      if (mode === 'right') {
        return `${prefixCls}-item-right`
      }
      if (position === 'right') {
        return `${prefixCls}-item-right`
      }
      return ''
    }
    return () => {
      const {
        prefixCls,
        items,
        reverse,
        mode,
        direction,
        rootClass,
        hashId,
      } = props
      const dotRender = slots?.dotRender ?? props?.dotRender
      const labelRender = slots?.labelRender ?? props?.labelRender
      const contentRender = slots?.contentRender ?? props?.contentRender
      const mergedItems = [...(items || [])].map((v, index) => {
        const label = checkRenderNode(labelRender ? labelRender({ item: v, index }) : v.label)
        const children = checkRenderNode(contentRender ? contentRender({ item: v, index }) : v.children)
        const dot = checkRenderNode(dotRender ? dotRender({ item: v, index }) : v.dot)
        const item: TimelineItemPropsKey = {
          ...omit(v, ['key']),
        }
        if (v.key) {
          item._key = v.key
        }
        if (label) {
          item.label = label
        }
        if (children) {
          item.children = children
        }
        if (dot) {
          item.dot = dot
        }
        return item
      })
      const pending = getSlotPropsFnRun(slots, props, 'pending')
      const pendingNode = typeof pending === 'boolean' ? null : pending
      const pendingDot = getSlotPropsFnRun(slots, props, 'pendingDot')
      let pendingItem: any
      if (pending) {
        pendingItem = {
          pending: !!pending,
          dot: pendingDot || <LoadingOutlined />,
          children: pendingNode,
        }
        mergedItems.push(pendingItem)
      }
      if (reverse) {
        mergedItems.reverse()
      }
      const itemsCount = mergedItems.length
      const lastCls = `${prefixCls}-item-last`

      const itemsList = mergedItems
        .filter((item: TimelineItemProps) => !!item)
        .map((item: TimelineItemProps, idx: number) => {
          const pendingClass = idx === itemsCount - 2 ? lastCls : ''
          const readyClass = idx === itemsCount - 1 ? lastCls : ''
          const { class: itemClassName, ...itemProps } = item
          return (
            <TimelineItem
              {...itemProps}
              class={classNames(
                itemClassName,
                !reverse && !!pending ? pendingClass : readyClass,
                getPositionCls(item?.position ?? '', idx),
              )}
            />
          )
        })
      const hasLabelItem = mergedItems.some((item: TimelineItemProps) => !!item?.label)

      const classString = classNames(
        prefixCls,
        {
          [`${prefixCls}-pending`]: !!pending,
          [`${prefixCls}-reverse`]: !!reverse,
          [`${prefixCls}-${mode}`]: !!mode && !hasLabelItem,
          [`${prefixCls}-label`]: hasLabelItem,
          [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        rootClass,
        hashId,
      )
      return (
        <ol {...omit(attrs, ['class'])} class={classString}>
          {itemsList}
        </ol>
      )
    }
  },
)

export default TimelineItemList
