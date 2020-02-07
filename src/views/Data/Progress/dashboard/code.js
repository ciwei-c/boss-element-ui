let code = `<template>
  <boss-progress :percentage="50" type="dashboard"></boss-progress>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"type 为 dashboard 时使用仪表盘进度条",
      anchor:{
        id:"dashboard",
        title:"仪表盘"
      }
    }
  }
}