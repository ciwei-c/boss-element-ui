let code = `<template>
  <div>
    <span>雨纷纷</span>
    <el-divider direction="vertical"></el-divider>
    <span>旧故里</span>
    <el-divider direction="vertical"></el-divider>
    <span>草木深</span>
  </div>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"vertical",
        title:"垂直分割线"
      }
    }
  }
}