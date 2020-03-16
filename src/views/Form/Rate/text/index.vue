<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="用辅助文字直接地表达对应分数"
  >
    <boss-rate v-model="value" show-text></boss-rate>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: null
    };
  }
};
</script>