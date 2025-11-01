import raf from '@v-c/util/dist/raf'
/**
 * Callback will only execute last one for each raf
 */
import { shallowRef } from 'vue'

export default function useRafDebounce(callback: VoidFunction) {
  const executeRef = shallowRef(false)
  const rafRef = shallowRef<number | null>(null)

  const wrapperCallback = callback
  return () => {
    if (executeRef.value) {
      return
    }
    executeRef.value = true
    wrapperCallback()
    rafRef.value = raf(() => {
      executeRef.value = false
    })
  }
}
