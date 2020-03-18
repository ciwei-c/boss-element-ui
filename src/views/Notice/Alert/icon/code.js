let code = `<template>
  <boss-row><boss-alert title="成功提示的文案" type="success" show-icon></boss-alert></boss-row>
  <boss-row><boss-alert title="消息提示的文案" type="info" show-icon></boss-alert></boss-row>
  <boss-row><boss-alert title="警告提示的文案" type="warning" show-icon></boss-alert></boss-row>
  <boss-row><boss-alert title="错误提示的文案" type="error" show-icon></boss-alert></boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置show-icon属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。",
      anchor:{
        id:"icon",
        title:"带有icon的提示"
      }
    }
  }
}