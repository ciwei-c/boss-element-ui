<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="竖直方向的步骤条。"
    :codeDesc="codeDesc"
  >
    <div style="height: 300px;">
      <boss-steps direction="vertical" :active="1">
        <boss-step title="步骤 1"></boss-step>
        <boss-step title="步骤 2"></boss-step>
        <boss-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></boss-step>
      </boss-steps>
    </div>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code]
};
</script>
