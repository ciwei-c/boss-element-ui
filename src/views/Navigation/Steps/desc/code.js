let code = `<template>
  <boss-steps :active="1">
    <boss-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></boss-step>
    <boss-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></boss-step>
    <boss-step title="步骤 3" description="这段就没那么长了"></boss-step>
  </boss-steps>
</template>

`
export default {
  data() {
    return {
      code,
      codeDesc: "也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。",
      anchor: {
        id: "desc",
        title: "有描述的步骤条"
      }
    }
  }
}