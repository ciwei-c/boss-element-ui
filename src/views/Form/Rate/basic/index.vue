<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc=""
  >
    <div style="display:flex;">
      <div style="flex:1">
        <h4>默认不区分颜色</h4>
        <boss-rate v-model="value1"></boss-rate>
      </div>
      <div style="flex:1">
        <h4>区分颜色</h4>
        <boss-rate v-model="value2" :colors="colors"></boss-rate>
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
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
    };
  }
};
</script>