<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="步骤条内可以启用各种自定义的图标。"
    :codeDesc="codeDesc"
  >
    <boss-steps :active="1">
      <boss-step title="步骤 1" icon="boss-icon-edit"></boss-step>
      <boss-step title="步骤 2" icon="boss-icon-upload"></boss-step>
      <boss-step title="步骤 3" icon="boss-icon-picture"></boss-step>
    </boss-steps>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
