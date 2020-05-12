let code = `<template>
  <boss-row :gutter="12">
    <boss-col :span="8">
      <boss-card shadow="always">总是显示</boss-card>
    </boss-col>
    <boss-col :span="8">
      <boss-card shadow="hover">鼠标悬浮时显示</boss-card>
    </boss-col>
    <boss-col :span="8">
      <boss-card shadow="never">从不显示</boss-card>
    </boss-col>
  </boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过shadow属性设置卡片阴影出现的时机：always、hover或never。",
      anchor:{
        id:"shadow",
        title:"卡片阴影"
      }
    }
  }
}