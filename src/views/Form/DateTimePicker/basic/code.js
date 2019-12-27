let code = `<template>
  <div class="date-picker-demo">
    <div>
      <span>默认</span>
      <boss-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></boss-date-picker>
    </div>
    <div>
      <span>带快捷选项</span>
      <boss-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions"
      ></boss-date-picker>
    </div>
    <div>
      <span>设置默认时间</span>
      <boss-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      ></boss-date-picker>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
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
      value2: "",
      value3: ""
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"通过设置type属性为datetime，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与 Date Picker 相同。",
      anchor:{
        id:"basic",
        title:"日期和时间点"
      }
    }
  }
}