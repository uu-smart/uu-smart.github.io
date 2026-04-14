import { defineClientConfig } from 'vuepress/client'
import VPCopyButton from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/components/VPCopyButton.vue'
import Tabs from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import '/Users/wanb/Desktop/docs/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1.0.0-rc.193_@types+markdown-it@14.1.2_@vuepress+bundler-vite@_feec1fd3e101d4b2c7bad592238c945c/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('VPCopyButton', VPCopyButton)
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
