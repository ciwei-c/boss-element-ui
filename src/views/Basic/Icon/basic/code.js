let code = `<template>
  <div>
    <i class="boss-icon-edit"></i>
    <i class="boss-icon-share"></i>
    <i class="boss-icon-delete"></i>
    <boss-button type="primary" icon="boss-icon-search">搜索</boss-button>
  </div>
</template>`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}