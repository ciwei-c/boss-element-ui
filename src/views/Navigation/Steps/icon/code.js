let code = `<template>
  <boss-steps :active="1">
    <boss-step title="步骤 1" icon="boss-icon-edit"></boss-step>
    <boss-step title="步骤 2" icon="boss-icon-upload"></boss-step>
    <boss-step title="步骤 3" icon="boss-icon-picture"></boss-step>
  </boss-steps>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过icon属性来设置图标，图标的类型可以参考 Icon 组件的文档，除此以外，还能通过具名slot来使用自定义的图标。",
      anchor:{
        id:"icon",
        title:"带图标的步骤条"
      }
    }
  }
}