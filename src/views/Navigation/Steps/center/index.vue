<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="标题和描述都将居中。"
    :codeDesc="codeDesc"
  >
    <boss-steps :active="2" align-center>
      <boss-step title="步骤1" description="这是一段很长很长很长的描述性文字"></boss-step>
      <boss-step title="步骤2" description="这是一段很长很长很长的描述性文字"></boss-step>
      <boss-step title="步骤3" description="这是一段很长很长很长的描述性文字"></boss-step>
      <boss-step title="步骤4" description="这是一段很长很长很长的描述性文字"></boss-step>
    </boss-steps>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
