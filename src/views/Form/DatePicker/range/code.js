let code = `<template>
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
</template>
<script>
export default {
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
    }
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用unlink-panels属性解除联动。",
      anchor:{
        id:"range",
        title:"日期范围"
      }
    }
  }
}