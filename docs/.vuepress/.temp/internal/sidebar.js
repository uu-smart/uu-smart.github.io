export const sidebar = {"/":{"/demo/":{"items":[{"text":"演示文档","collapsed":false,"items":["",{"text":"基础页面","collapsed":false,"items":["foo","bar"]},{"text":"Markdown 示例","items":["markdown"]}]}],"prefix":"/demo/"}},"__auto__":{},"__home__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
