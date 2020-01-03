<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <div style="display:flex">
      <div style="flex:1">
        <h4>有默认值</h4>
        <boss-color-picker v-model="color1"></boss-color-picker>
      </div>
      <div style="flex:1">
        <h4>无默认值</h4>
        <boss-color-picker v-model="color2"></boss-color-picker>
      </div>
    </div>
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