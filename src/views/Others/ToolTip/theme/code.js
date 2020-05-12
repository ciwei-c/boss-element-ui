let code = `<template>
  <boss-tooltip content="Top center" placement="top">
    <boss-button>Dark</boss-button>
  </boss-tooltip>
  <boss-tooltip content="Bottom center" placement="bottom" effect="light">
    <boss-button>Light</boss-button>
  </boss-tooltip>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置effect属性来改变主题，默认为dark。",
      anchor:{
        id:"theme",
        title:"主题"
      }
    }
  }
}