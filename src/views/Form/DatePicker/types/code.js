let code = `<template>
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
</template>
<script>
export default {
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
`
export default {
  data(){
    return {
      code,
      codeDesc:"",
      anchor:{
        id:"types",
        title:"其他日期类型"
      }
    }
  }
}