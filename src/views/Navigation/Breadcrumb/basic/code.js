let code = `<template>
  <boss-breadcrumb separator="/">
    <boss-breadcrumb-item :to="{ path: '/' }">首页</boss-breadcrumb-item>
    <boss-breadcrumb-item><a href="/">活动管理</a></boss-breadcrumb-item>
    <boss-breadcrumb-item>活动列表</boss-breadcrumb-item>
    <boss-breadcrumb-item>活动详情</boss-breadcrumb-item>
  </boss-breadcrumb>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"在 el-breadcrumb 中使用 el-breadcrumb-item 标签表示从首页开始的每一级。Element 提供了一个 separator 属性，在 el-breadcrumb 标签中设置它来决定分隔符，它只能是字符串，默认为斜杠/。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}