let code = `<template>
  <div style="height: 300px;">
    <boss-steps direction="vertical" :active="1">
      <boss-step title="步骤 1"></boss-step>
      <boss-step title="步骤 2"></boss-step>
      <boss-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></boss-step>
    </boss-steps>
  </div>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"只需要在el-steps元素中设置direction属性为vertical即可。",
      anchor:{
        id:"vertical",
        title:"竖向的步骤条"
      }
    }
  }
}