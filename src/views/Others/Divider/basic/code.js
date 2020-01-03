let code = `<template>
  <div>
    <span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
    <boss-divider></boss-divider>
    <span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
  </div>
</template>
`
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