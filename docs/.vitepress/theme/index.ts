import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import PhysicalAiMindmap from './components/PhysicalAiMindmap.vue'
import PhysicalAiTimeline from './components/PhysicalAiTimeline.vue'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PhysicalAiMindmap', PhysicalAiMindmap)
    app.component('PhysicalAiTimeline', PhysicalAiTimeline)
  },
} satisfies Theme
