let code = `<template>
  <div>
    <boss-steps :active="step%3" simple>
      <boss-step title="步骤 1" icon="boss-icon-edit"></boss-step>
      <boss-step title="步骤 2" icon="boss-icon-upload"></boss-step>
      <boss-step title="步骤 3" icon="boss-icon-picture"></boss-step>
    </boss-steps>
    <boss-steps :active="step%3" finish-status="success" simple style="margin-top: 20px">
      <boss-step title="步骤 1"></boss-step>
      <boss-step title="步骤 2"></boss-step>
      <boss-step title="步骤 3"></boss-step>
    </boss-steps>
    <boss-button @click="step ++" style="margin-top:10px">下一步</boss-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      step:0
    }
  }
};
</script>

`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"simple",
        title:"简洁风格的步骤条"
      }
    }
  }
}