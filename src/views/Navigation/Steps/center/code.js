let code = `<template>
  <boss-steps :active="2" align-center>
    <boss-step title="步骤1" description="这是一段很长很长很长的描述性文字"></boss-step>
    <boss-step title="步骤2" description="这是一段很长很长很长的描述性文字"></boss-step>
    <boss-step title="步骤3" description="这是一段很长很长很长的描述性文字"></boss-step>
    <boss-step title="步骤4" description="这是一段很长很长很长的描述性文字"></boss-step>
  </boss-steps>
</template>
`
export default {
  data() {
    return {
      code,
      codeDesc: "",
      anchor: {
        id: "center",
        title: "居中的步骤条"
      }
    }
  }
}