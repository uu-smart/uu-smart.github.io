export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/tkurpsos/\",\"/demo/foo.html\":\"/demo/qxapvfu7/\",\"/demo/markdown.html\":\"/demo/47oazqfu/\",\"/demo/demo%20copy/1111.html\":\"/demo/tkurpsos/\",\"/demo/demo%20copy/222.html\":\"/demo/qxapvfu7/\",\"/demo/demo%20copy/3333.html\":\"/demo/47oazqfu/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/wanb/Desktop/docs/my-project/docs/README.md"), meta: {"title":""} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/README.md"), meta: {"title":"Demo"} }],
  ["/demo/tkurpsos/", { loader: () => import(/* webpackChunkName: "demo_tkurpsos_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/bar.md"), meta: {"title":"bar"} }],
  ["/demo/qxapvfu7/", { loader: () => import(/* webpackChunkName: "demo_qxapvfu7_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/foo.md"), meta: {"title":"foo"} }],
  ["/demo/47oazqfu/", { loader: () => import(/* webpackChunkName: "demo_47oazqfu_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/markdown.md"), meta: {"title":"markdown"} }],
  ["/demo/tkurpsos/", { loader: () => import(/* webpackChunkName: "demo_tkurpsos_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/demo copy/1111.md"), meta: {"title":"bar"} }],
  ["/demo/qxapvfu7/", { loader: () => import(/* webpackChunkName: "demo_qxapvfu7_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/demo copy/222.md"), meta: {"title":"foo"} }],
  ["/demo/47oazqfu/", { loader: () => import(/* webpackChunkName: "demo_47oazqfu_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/demo/demo copy/3333.md"), meta: {"title":"markdown"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/wanb/Desktop/docs/my-project/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/.vuepress/.temp/pages/blog/index.html.vue"), meta: {"title":"Blog"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.vue"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/.vuepress/.temp/pages/blog/archives/index.html.vue"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"/Users/wanb/Desktop/docs/my-project/docs/.vuepress/.temp/pages/blog/categories/index.html.vue"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
