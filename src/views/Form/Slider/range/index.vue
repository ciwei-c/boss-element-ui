<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="支持选择某一数值范围"
  >
    <boss-slider v-model="value" range show-stops :max="10"></boss-slider>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: 0
    };
  }
};
</script>