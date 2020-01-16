<template>
  <demo-sample-panel
    :title="anchor.title"
    :panel-id="anchor.id"
    :code="code"
    :codeDesc="codeDesc"
    desc="以「日」为基本单位，基础的日期选择控件"
  >
    <div class="date-picker-demo">
      <div>
        <span>默认</span>
        <boss-date-picker v-model="value1" type="date" placeholder="选择日期"></boss-date-picker>
      </div>
      <div>
        <span>带快捷选项</span>
        <boss-date-picker
          v-model="value2"
          align="right"
          type="date"
          placeholder="选择日期"
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
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      value1: "",
      value2: ""
    };
  }
};
</script>
<style lang="scss" scoped>
.date-picker-demo {
  display: flex;
  > div {
    flex: 1;
    > span {
      color: #222;
      display: inline-block;
      padding: 10px 0;
    } 
  }
}
</style>