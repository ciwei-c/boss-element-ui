<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="每个步骤有其对应的步骤状态描述。"
    :codeDesc="codeDesc"
  >
    <boss-steps :active="1">
      <boss-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></boss-step>
      <boss-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></boss-step>
      <boss-step title="步骤 3" description="这段就没那么长了"></boss-step>
    </boss-steps>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
