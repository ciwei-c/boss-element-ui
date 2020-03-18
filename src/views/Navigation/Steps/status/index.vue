<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="每一步骤显示出该步骤的状态。"
    :codeDesc="codeDesc"
  >
    <boss-steps :space="200" :active="1" finish-status="success">
      <boss-step title="已完成"></boss-step>
      <boss-step title="进行中"></boss-step>
      <boss-step title="步骤 3"></boss-step>
    </boss-steps>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
