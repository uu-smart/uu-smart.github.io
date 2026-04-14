<template><div></div></template>
<script>
export const _pageData = JSON.parse("{\"path\":\"/blog/tags/\",\"title\":\"标签\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"标签\",\"draft\":true},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":null,\"headers\":[],\"type\":\"posts-tags\"}")
export default { name: "index.html.vue" }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updatePageData?.(_pageData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updatePageData?.(m._pageData)
  })
}

</script>