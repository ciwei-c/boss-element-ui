<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="适用于在多个互斥的选项中选择的场景"
  >
    <boss-radio-group v-model="radio">
      <boss-radio :label="3">备选项</boss-radio>
      <boss-radio :label="6">备选项</boss-radio>
      <boss-radio :label="9">备选项</boss-radio>
    </boss-radio-group>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      radio: 3
    };
  }
};
</script>