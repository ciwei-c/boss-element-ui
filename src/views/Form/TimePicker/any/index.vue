<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="可以选择任意时间"
  >
    <boss-row>
      <boss-time-picker
        v-model="value1"
        :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
        placeholder="任意时间点"
      ></boss-time-picker>
    </boss-row>
    <boss-row>
      <boss-time-picker
        arrow-control
        v-model="value2"
        :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
        placeholder="任意时间点"
      ></boss-time-picker>
    </boss-row>
  </demo-sample-panel>
</template>
<script>
import code from "./code";
export default {
  mixins: [code],
  data() {
    return {
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40)
    };
  }
};
</script>