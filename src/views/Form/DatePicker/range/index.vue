<template>
  <demo-sample-panel
    :title="anchor.title"
    :panboss-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="通过扩展基础的日期选择，可以选择周、月、年或多个日期"
  >
    <div class="container">
      <div class="block">
        <span class="demonstration">默认</span>
        <boss-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></boss-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">带快捷选项</span>
        <boss-date-picker
          v-model="value2"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions"
        ></boss-date-picker>
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
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  .demonstration {
    margin-bottom: 10px;
    display: inline-block;
  }
  .block {
    margin-bottom: 20px;
    flex: 1;
  }
}
</style>