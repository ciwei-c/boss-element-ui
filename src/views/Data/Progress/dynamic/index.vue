<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="会动的进度条才是好进度条"
  >
    <boss-row>
      <boss-col :span="8">
        <boss-progress :percentage="percentage"></boss-progress>
      </boss-col>
      <boss-col :span="8">
        <boss-progress :percentage="percentage" type="circle"></boss-progress>
      </boss-col>
      <boss-col :span="8">
        <boss-progress :percentage="percentage" type="dashboard"></boss-progress>
      </boss-col>
    </boss-row>
    <hr>
    <boss-row style="text-align:center">
      <boss-button icon="boss-icon-plus" :disabled="percentage == 100" @click="percentage += 10"></boss-button>
      <boss-button icon="boss-icon-minus" :disabled="percentage == 0" @click="percentage -= 10"></boss-button>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      percentage: 50
    };
  }
};
</script>