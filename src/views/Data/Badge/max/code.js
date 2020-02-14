let code = `<template>
  <boss-badge :value="200" :max="99" class="item">
    <boss-button size="small">评论</boss-button>
  </boss-badge>
  <boss-badge :value="100" :max="10" class="item">
    <boss-button size="small">回复</boss-button>
  </boss-badge>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"由max属性定义，它接受一个Number，需要注意的是，只有当value为Number时，它才会生效。",
      anchor:{
        id:"max",
        title:"最大值"
      }
    }
  }
}