<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="动态尺寸用法展示"
  >
    <span>stroke-width</span>
    <boss-slider v-model="value1" :min="6" :max="12"></boss-slider>
    <span>width</span>
    <boss-slider v-model="value2" :min="120" :max="140"></boss-slider>
    <hr>
    <boss-row>
      <boss-col :span="12">
        <boss-progress style="margin-right: 20px;" :percentage="50" :stroke-width="value1" active></boss-progress>
      </boss-col>
      <boss-col :span="12">
        <boss-progress type="circle" :percentage="50" :stroke-width="value1" :width="value2"></boss-progress>
      </boss-col>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data(){
    return {
      value1:8,
      value2:126,
    }
  }
};
</script>