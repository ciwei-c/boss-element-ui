<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc
  >
    <boss-row>
      <boss-row>起始日期时刻为 12:00:00</boss-row>
      <boss-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      ></boss-date-picker>
    </boss-row>
    <boss-row>
      <boss-row>起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</boss-row>
      <boss-date-picker
        v-model="value2"
        type="datetimerange"
        align="right"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00', '08:00:00']"
      ></boss-date-picker>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value1: "",
      value2: ""
    };
  }
};
</script>