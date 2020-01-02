<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。"
  >
    <boss-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></boss-switch>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: true
    };
  }
};
</script>