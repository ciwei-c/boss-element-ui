<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="选项可以是离散的"
  >
    <boss-row>
      <span>不显示间断点</span>
      <boss-slider v-model="value1" :step="10"></boss-slider>
    </boss-row>
    <boss-row>
      <span>显示间断点</span>
      <boss-slider v-model="value2" :step="10" show-stops></boss-slider>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value1: 0,
      value2: 0
    };
  }
};
</script>