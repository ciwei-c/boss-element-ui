<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-row>
      <boss-row>默认不区分颜色</boss-row>
      <boss-rate v-model="value1"></boss-rate>
    </boss-row>
    <boss-row>
      <boss-row>区分颜色</boss-row>
      <boss-rate v-model="value2" :colors="colors"></boss-rate>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  }
};
</script>