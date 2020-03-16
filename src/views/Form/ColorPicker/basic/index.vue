<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-row>
      <boss-row>有默认值</boss-row>
      <boss-color-picker v-model="color1"></boss-color-picker>
    </boss-row>
    <boss-row>
      <boss-row>无默认值</boss-row>
      <boss-color-picker v-model="color2"></boss-color-picker>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      color1: "#409EFF",
      color2: null
    };
  }
};
</script>