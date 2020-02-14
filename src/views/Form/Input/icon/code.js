let code = `<template>
  <div>
    属性方式：
    <boss-input placeholder="请选择日期" suffix-icon="boss-icon-date" v-model="input1"></boss-input>
    <boss-input placeholder="请输入内容" prefix-icon="boss-icon-search" v-model="input2"></boss-input>
  </div>
  <div>
    slot 方式：
    <boss-input placeholder="请选择日期" v-model="input3">
      <i slot="suffix" class="boss-input__icon boss-icon-date"></i>
    </boss-input>
    <boss-input placeholder="请输入内容" v-model="input4">
      <i slot="prefix" class="boss-input__icon boss-icon-search"></i>
    </boss-input>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      input4: ""
    };
  }
};
</script>
<style lang="scss" scoped>
  .boss-input {
    margin: 10px 0;
  }
</style>
`
export default {
  data(){
    return {
      code,
      codeDesc:"可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。",
      anchor:{
        id:"icon",
        title:"带icon的输入框"
      }
    }
  }
}