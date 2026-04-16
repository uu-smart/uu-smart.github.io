export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/xwqxz33u/\",\"/demo/foo.html\":\"/demo/2ir6ehuz/\",\"/blog/preview/custom-component.example.html\":\"/blog/sn53157j/\",\"/blog/preview/markdown.html\":\"/blog/syjrtywp/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/demo/xwqxz33u/", { loader: () => import(/* webpackChunkName: "demo_xwqxz33u_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/demo/xwqxz33u/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/2ir6ehuz/", { loader: () => import(/* webpackChunkName: "demo_2ir6ehuz_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/demo/2ir6ehuz/index.html.js"), meta: {"title":"foo"} }],
  ["/blog/sn53157j/", { loader: () => import(/* webpackChunkName: "blog_sn53157j_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/sn53157j/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/syjrtywp/", { loader: () => import(/* webpackChunkName: "blog_syjrtywp_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/syjrtywp/index.html.js"), meta: {"title":"Markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/wanb/Desktop/uu-smart.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
