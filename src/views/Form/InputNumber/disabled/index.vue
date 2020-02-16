<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="计数器禁用状态"
  >
    <boss-input-number v-model="num" disabled></boss-input-number>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      num: 1
    };
  }
};
</script>