let code = `<template>
    <boss-row>
      <boss-alert title="成功提示的文案" type="success" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="消息提示的文案" type="info" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="警告提示的文案" type="warning" effect="dark"></boss-alert>
    </boss-row>
    <boss-row>
      <boss-alert title="错误提示的文案" type="error" effect="dark"></boss-alert>
    </boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置effect属性来改变主题，默认为light。",
      anchor:{
        id:"theme",
        title:"主题"
      }
    }
  }
}