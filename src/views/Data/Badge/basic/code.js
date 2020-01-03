let code = `<template>
  <boss-badge :value="12" style="margin-right:40px">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge :value="3" style="margin-right:40px">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
  <boss-badge :value="1" style="margin-right:40px" type="primary">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge :value="2" style="margin-right:40px" type="warning">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"定义 value 属性，它接受 Number 或者 String ",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}