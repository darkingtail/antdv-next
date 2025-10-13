import type { App, Plugin } from 'vue'
import * as components from './components'

export default {
  install(app: App) {
    Object.keys(components).forEach((key) => {
      const component = (components as any)[key]
      if ('install' in component) {
        app.use(component)
      }
    })
  },
} as Plugin
