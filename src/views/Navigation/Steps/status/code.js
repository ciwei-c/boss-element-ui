let code = `<template>
  <boss-steps :space="200" :active="1" finish-status="success">
    <boss-step title="已完成"></boss-step>
    <boss-step title="进行中"></boss-step>
    <boss-step title="步骤 3"></boss-step>
  </boss-steps>
</template>
`
export default {
  data(){
    return {
      code,
      codeDesc:"也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。",
      anchor:{
        id:"status",
        title:"包含状态的步骤条"
      }
    }
  }
}