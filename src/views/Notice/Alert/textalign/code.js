let code = `<template>
  <boss-row><boss-alert title="成功提示的文案" type="success" show-icon center></boss-alert></boss-row>
  <boss-row><boss-alert title="消息提示的文案" type="info" show-icon center></boss-alert></boss-row>
  <boss-row><boss-alert title="警告提示的文案" type="warning" show-icon center></boss-alert></boss-row>
  <boss-row><boss-alert title="错误提示的文案" type="error" show-icon center></boss-alert></boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"textalign",
        title:"文字居中"
      }
    }
  }
}