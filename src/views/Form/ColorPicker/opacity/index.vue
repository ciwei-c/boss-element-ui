<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-color-picker v-model="color"  show-alpha></boss-color-picker>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      color: "rgba(19, 206, 102, 0.8)"
    };
  }
};
</script>