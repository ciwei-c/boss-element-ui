let code = `<template>
  <boss-row>
    <boss-alert title="成功提示的文案" type="success"></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="消息提示的文案" type="info"></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="警告提示的文案" type="warning"></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="错误提示的文案" type="error"></boss-alert>
  </boss-row>
</template>`
export default {
  data(){
    return {
      code,
      codeDesc:"Alert 组件提供四种主题，由type属性指定，默认值为info。",
      anchor:{
        id:"basic",
        title:"基础用法"
      }
    }
  }
}