<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="提供几个固定的时间点供用户选择"
  >
    <boss-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30'
      }"
      placeholder="选择时间"
    ></boss-time-select>
      <boss-time-picker placeholder="选择时间" v-model="value" style="width: 100%;"></boss-time-picker>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value: ""
    };
  }
};
</script>