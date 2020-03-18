let code = `<template>
  <boss-row>
    <boss-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></boss-alert>
  </boss-row>
  <boss-row>
    <boss-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon></boss-alert>
  </boss-row>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"最后，这是一个同时具有 icon 和辅助性文字的样例。",
      anchor:{
        id:"icondesc",
        title:"带有icon和辅助文字的提示"
      }
    }
  }
}