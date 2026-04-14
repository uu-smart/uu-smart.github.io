import { defineCollection } from 'vuepress-theme-plume'
import { demoSidebar } from '../sidebar/index.js'

export default defineCollection({
  type: 'doc',
  dir: 'demo',
  linkPrefix: '/demo',
  title: 'Demo',
  sidebar: demoSidebar,
})
