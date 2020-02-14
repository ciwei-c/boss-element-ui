let code = `<template>
  <boss-badge value="new" class="item">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge value="hot" class="item">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"定义value为String类型是时可以用于显示自定义文本。",
      anchor:{
        id:"custom",
        title:"自定义内容"
      }
    }
  }
}