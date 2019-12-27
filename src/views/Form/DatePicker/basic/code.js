let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数",
      anchor:{
        id:"basic",
        title:"选择日"
      }
    }
  }
}