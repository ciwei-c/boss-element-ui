<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。"
    :codeDesc="codeDesc"
  >
    <div>
      <boss-steps :active="step%3" simple>
        <boss-step title="步骤 1" icon="boss-icon-edit"></boss-step>
        <boss-step title="步骤 2" icon="boss-icon-upload"></boss-step>
        <boss-step title="步骤 3" icon="boss-icon-picture"></boss-step>
      </boss-steps>
      <boss-steps :active="step%3"  simple style="margin-top: 20px">
        <boss-step title="步骤 1"></boss-step>
        <boss-step title="步骤 2"></boss-step>
        <boss-step title="步骤 3"></boss-step>
      </boss-steps>
      <boss-button @click="step ++" style="margin-top:10px">下一步</boss-button>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data(){
    return {
      step:0
    }
  }
};
</script>
