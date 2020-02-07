let code = `<template>
  <boss-row>
    <boss-button type="text">Link</boss-button>
    <boss-button type="text" disabled>Link</boss-button>
  </boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"text",
        title:"文字按钮"
      }
    }
  }
}