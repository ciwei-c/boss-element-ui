<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    desc="简单的步骤条。"
    :codeDesc="codeDesc"
  >
    <boss-steps :active="active" finish-status="success">
      <boss-step title="步骤 1"></boss-step>
      <boss-step title="步骤 2"></boss-step>
      <boss-step title="步骤 3"></boss-step>
    </boss-steps>
    <boss-button style="margin-top: 12px;" @click="next">下一步</boss-button>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      active: 0
    };
  },

  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    }
  }
};
</script>
