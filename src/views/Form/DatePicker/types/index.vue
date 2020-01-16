<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="通过扩展基础的日期选择，可以选择周、月、年或多个日期"
  >
    <div style="overflow:hidden">
      <div class="container">
        <div class="block">
          <span class="demonstration">周</span>
          <boss-date-picker v-model="value1" type="week" format="yyyy 第 WW 周" placeholder="选择周"></boss-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">月</span>
          <boss-date-picker v-model="value2" type="month" placeholder="选择月"></boss-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span class="demonstration">年</span>
          <boss-date-picker v-model="value3" type="year" placeholder="选择年"></boss-date-picker>
        </div>
        <div class="block">
          <span class="demonstration">多个日期</span>
          <boss-date-picker type="dates" v-model="value4" placeholder="选择一个或多个日期"></boss-date-picker>
        </div>
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
      value1: "",
      value2: "",
      value3: "",
      value4: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 50%;
  float: left;
  .demonstration {
    margin-bottom: 10px;
    display: inline-block;
  }
  .block {
    margin-bottom: 20px;
  }
}
</style>