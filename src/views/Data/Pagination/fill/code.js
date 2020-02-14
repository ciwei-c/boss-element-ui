let code = `<template>
  <boss-pagination background layout="prev, pager, next" :total="1000"></boss-pagination>
</template>`
export default {
  data(){
    return {
      code,
      codeDesc:"设置background属性可以为分页按钮添加背景色。",
      anchor:{
        id:"fill",
        title:"背景色分页"
      }
    }
  }
}